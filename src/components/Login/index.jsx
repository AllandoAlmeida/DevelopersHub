/* import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { loginSchema } from "./loginSchema";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const navigate = useNavigate();

    const userRegister = async (LoginData) => {    
    try {
        const body = {
          email: LoginData.email,
          password: LoginData.password,
        };
        const response = await api.post("/sessions", body);
        console.log("Login efetuado com sucesso;");
        console.log(response.data)
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }

    }

    const submit = async (LoginData) =>{
        console.log(LoginData)
        userRegister(LoginData)
    }
    return(
        <form onSubmit={handleSubmit(submit)} noValidate>
            <Input label="Email" type="email" placeholder="Digite aqui seu e-mail" {...register("email")} error={errors.email} />
            <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password}/>
            <button type="submit">Entrar</button>
        </form>
    )
} */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { loginSchema } from "./loginSchema";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const userRegister = async (LoginData) => {
    try {
      const body = {
        email: LoginData.email,
        password: LoginData.password,
      };
      const response = await api.post("/sessions", body);
      const { token } = response.data;
      localStorage.setItem('@kenzieHub:token', JSON.stringify(token));
      console.log("Login efetuado com sucesso");
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (LoginData) => {
    console.log(LoginData);
    userRegister(LoginData);
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu e-mail"
        {...register("email")}
        error={errors.message}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.message}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
