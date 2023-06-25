import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

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
      toast.success("Cadastro efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
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
      toast.success("Login efetuado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
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
          console.log(error);
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

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, Logout, user, setUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
