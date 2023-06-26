import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { api } from "../service/api";
import { Loading } from "../components/Loading";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logoutFlag, setLogoutFlag] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      const body = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      };
      await api.post("/users", body);
      toast.success("Cadastro realizado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const userLogin = async (LoginData) => {
    try {
      const body = {
        email: LoginData.email,
        password: LoginData.password,
      };
      const response = await api.post("/sessions", body);
      const { token, user } = response.data;
      localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
      setUser(user);
      toast.success("Login realizado com Sucesso!", {
        transition: Slide,
        autoClose: 2000,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar realizar a operação solicitada.", {
        transition: Slide,
        autoClose: 2000,
      });
    }
  };

  const Logout = () => {
    localStorage.removeItem("@kenzieHub:token");
    setUser(null);

    setLogoutFlag(true);
  };

  useEffect(() => {
    const tokenWithQuotes = localStorage.getItem("@kenzieHub:token");
    if (tokenWithQuotes) {
      const token = tokenWithQuotes.replace(/"/g, "");

      const fetchProfile = async () => {
        setLoading(true);
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          toast.error(
            "Ocorreu um erro ao tentar realizar a operação solicitada.",
            {
              transition: Slide,
              autoClose: 2000,
            }
          );
          localStorage.removeItem("@kenzieHub:token");
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }
  }, []);

  useEffect(() => {
    if (logoutFlag) {
      navigate("/", { replace: true });

      setLogoutFlag(false);
    }
  }, [logoutFlag, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, Logout, user, setUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
