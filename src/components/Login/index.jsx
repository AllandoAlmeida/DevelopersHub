import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { ButtonToAccess } from "../Buttons/ButtonToAccess";
import { StyledLoginForm } from "./styels";
import { toast } from "react-toastify";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const userRegister = async (LoginData) => {
    try {
      const body = {
        email: LoginData.email,
        password: LoginData.password,
      };
      const response = await api.post("/sessions", body);
      const { token } = response.data;
      localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
      toast.success("Login efetuado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const submit = async (LoginData) => {
    userRegister(LoginData);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu e-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
      />
      <ButtonToAccess
        type="submit"
        text="Entrar"
        backgroundColor="color-color-primary"
        textColor="white"
        hoverBackgroundColor="color-color-primary-50"
      />
    </StyledLoginForm>
  );
};
