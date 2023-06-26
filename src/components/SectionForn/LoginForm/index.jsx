import { useForm } from "react-hook-form";
import { StyledLoginForm } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input";
import { ButtonToAccess } from "../../Buttons/ButtonToAccess";

export const LoginForn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userLogin } = useContext(UserContext);

  const submit = async (LoginData) => {
    userLogin(LoginData);
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
        background="color-color-primary"
        textcolor="white"
        hover="color-color-primary-50"
      />
    </StyledLoginForm>
  );
};
