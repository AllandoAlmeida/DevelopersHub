import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "./createAccountSchema";

import { Input } from "../Input";
import { Select } from "../Select/Select";
import { ButtonToAccess } from "../Buttons/ButtonToAccess";

import { StyledForm } from "./styles";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


export const CreateAccount = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAccountSchema),
  });

  const {userRegister} = useContext (UserContext)
  

  const submit = async (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="E-mal"
        type="text"
        placeholder="Digite aqui seu email"
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
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirm")}
        error={errors.confirm}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Fale sobre você"
        {...register("contact")}
        error={errors.contact}
      />

      <Select
        label="Selecionar módulo"
        {...register("course_module")}
        error={errors.course_module}
      >
        <option value="">Selecione um Módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </Select>
      <div>
        <ButtonToAccess
              type="submit"
              text="Cadastre-se"
              background="color-color-primary-disable"
              textcolor="white"
              hover="color-grey-2"
            />
      </div>
      
    </StyledForm>
  );
};
