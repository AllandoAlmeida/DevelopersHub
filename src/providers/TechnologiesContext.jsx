import React, { useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../service/api";
import { Slide, toast } from "react-toastify";

export const TechnologiesContext = createContext({});

export const TechnologiesProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [isModalAddTechsOpen, setIsModalAddTechsOpen] = useState(false);
  const [isModalEditTechsOpen, setIsModalEditTechsOpen] = useState(false);
  const [technologies, setTechnologies] = useState(user.techs);

  const [tecnologyToEdit, setTecnologyToEdit] = useState({});

  const createTechnology = async (formData) => {
    try {
      const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
      const token = tokenWithQuotes.replace(/"/g, "");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechnologies((technologies) => [...technologies, data]);

      toast.success("Cadastro realizado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      setIsModalEditTechsOpen(false);
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const handleDelete = async (technologyToEditId) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
    const token = tokenWithQuotes.replace(/"/g, "");
    try {
      await api.delete(`/users/techs/${technologyToEditId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnologies((technologies) =>
        technologies.filter(
          (technology) => technology.id !== technologyToEditId
        )
      );
      toast.success("Exclusão realizada com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const handleUpdateTech = async (technologyToEditId, formData) => {
    const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
    const token = tokenWithQuotes.replace(/"/g, "");
    try {
      await api.put(`/users/techs/${technologyToEditId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechnologies((prevTechnologies) =>
        prevTechnologies.map((technology) => {
          if (technology.id === technologyToEditId) {
            return {
              ...technology,
              status: formData.status,
            };
          }
          return technology;
        })
      );

      toast.success("Status atualizado com sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });

      setIsModalEditTechsOpen(false);
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const handleCardClick = (technology) => {
    setActiveCard(technology.id);
  };

  return (
    <TechnologiesContext.Provider
      value={{
        loading,
        technologies,
        createTechnology,
        handleDelete,
        handleCardClick,
        handleUpdateTech,

        isModalAddTechsOpen,
        setIsModalAddTechsOpen,
        isModalEditTechsOpen,
        setIsModalEditTechsOpen,
        tecnologyToEdit,
        setTecnologyToEdit,
      }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};
