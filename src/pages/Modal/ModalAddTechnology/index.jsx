import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechnologiesContext } from "../../../providers/TechnologiesContext";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select/Select";
import { HeaderModal } from "../HeaderModal";
import { ButtonToAccess } from "../../../components/Buttons/ButtonToAccess";
import { StyledContainerAddModal, StyledModalItems } from "./styles";

export const ModalAddTechnology = () => {
  const { setIsModalAddTechsOpen, createTechnology } =
    useContext(TechnologiesContext);
  const { register, handleSubmit, errors } = useForm();

  const submit = (formData) => {
    createTechnology(formData);
  };

  return (
    <StyledContainerAddModal role="dialog">
      <StyledModalItems>
        <HeaderModal
          text="Cadastrar Tecnologia"
          onClick={setIsModalAddTechsOpen}
        />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite a tecnologia"
            {...register("title")}
            error={errors?.title}
          />
          <Select
            label="Selecionar módulo"
            {...register("status")}
            error={errors?.status}
          >
            <option value="">Selecionar status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <ButtonToAccess
            type="submit"
            text="Cadastrar Tecnologia"
            background="color-color-primary"
            textcolor="white"
            hover="color-color-primary-50"
          />
        </form>
      </StyledModalItems>
    </StyledContainerAddModal>
  );
};
