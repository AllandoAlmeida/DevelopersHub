import { useContext } from "react";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import { StyledTitleTechnologies } from "./styles";
import { ButtonNav } from "../Buttons/ButtonNav";

export const SectionAddTechnology = () => {
  const { setIsModalAddTechsOpen } = useContext(TechnologiesContext);

  return (
    <StyledTitleTechnologies>
      <div>
        <h1>Tecnologias</h1>
        <ButtonNav
          width="3.3rem"
          height="3.3rem"
          type="button"
          text="+"
          background="color-grey-2"
          textcolor="color-grey-0"
          hover="color-grey-2"
          onClick={() => setIsModalAddTechsOpen(true)}
        />
      </div>
    </StyledTitleTechnologies>
  );
};
