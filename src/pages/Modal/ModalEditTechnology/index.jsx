import { useContext, useState } from "react";
import { TechnologiesContext } from "../../../providers/TechnologiesContext";
import { ButtonNav } from "../../../components/Buttons/ButtonNav";
import { Select } from "../../../components/Select/Select";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { HeaderModal } from "../HeaderModal";
import { DeletingTechnology } from "../../../components/DeletingTechnology";
import {
  StyledContainerModal,
  StyledModalButton,
  StyledModalItems,
} from "./styles";


export const ModalEditTechnology = () => {
  const {
    tecnologyToEdit,
    setIsModalEditTechsOpen,
    handleDelete,
    handleUpdateTech,
  } = useContext(TechnologiesContext);
  const [isDeleting, setIsDeleting] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = (formData) => {
    handleUpdateTech(tecnologyToEdit.id, formData);
  };


  return (
    <StyledContainerModal role="dialog">
      <StyledModalItems>
        <HeaderModal
          text="Tecnologia Detalhes"
          onClick={setIsModalEditTechsOpen}
        />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            placeholder={tecnologyToEdit.title}
            {...register("title")}
            error={errors?.title}
            disabled
          />

          <Select
            label="Status"
            {...register("status")}
            error={errors?.status}
            defaultValue={tecnologyToEdit.status}
            onChange={(event) => setValue("status", event.target.value)}
          >
            <option value="">Módulo Atual - {tecnologyToEdit.status}</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <StyledModalButton>
            <ButtonNav
              width="20.4rem"
              height="4.8rem"
              type="submit"
              text="Salvar Alterações"
              background="color-color-primary-disable"
              textcolor="white"
              hover="color-grey-2"
            />

            <ButtonNav
              width="9.8rem"
              height="4.8rem"
              type="button"
              text="Excluir"
              background="color-grey-1"
              textcolor="color-grey-0"
              hover="color-grey-2"
              onClick={() => setIsDeleting(tecnologyToEdit)}
            />
          </StyledModalButton>
        </form>

        {isDeleting ? (
          <DeletingTechnology
            trueCallback={async () => {
              await handleDelete(isDeleting.id);
              setIsDeleting(null);
              setIsModalEditTechsOpen(false);
            }}
            falseCallback={() => setIsDeleting(null)}
          >
            <h3>Confirma a Exclusão dessa tecnologia?</h3>
          </DeletingTechnology>
        ) : null}
      </StyledModalItems>
    </StyledContainerModal>
  );
};
