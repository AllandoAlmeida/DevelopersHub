import React, { useContext } from "react";
import { TechnologyCard } from "./TechnologyCard";
import { StyledTechList, StyledTitleTechnologies } from "./styles";
import { TechnologiesContext } from "../../../../providers/TechnologiesContext";
import { UserContext } from "../../../../providers/UserContext";
import { ButtonNav } from "../../../Buttons/ButtonNav";
import { EmptyTechList } from "../../EmptyTechList";

export const TechnologiesList = () => {
  const { user } = useContext(UserContext);
  const {
    setIsModalEditTechsOpen,
    setTecnologyToEdit,
    technologies,
    setIsModalAddTechsOpen,
  } = useContext(TechnologiesContext);

  const handleEditTechs = (technology) => {
    setTecnologyToEdit(technology);
    setIsModalEditTechsOpen(true);
  };

  if (user && Array.isArray(technologies)) {
    return (
      <>
        <StyledTitleTechnologies>
            <h1>Tecnologias</h1>
            <ButtonNav
              width="3.3rem"
              height="3.3rem"
              type="button"
              text="+"
              backgroundColor="color-grey-3"
              textcolor="color-grey-0"
              hoverbackgroundColor="color-grey-2"
              onClick={() => setIsModalAddTechsOpen(true)}
            />
        </StyledTitleTechnologies>
        <StyledTechList>
          <div>
            {technologies.length > 0 ? (
              technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  action={handleEditTechs}
                />
              ))
            ) : (
              <EmptyTechList />
            )}
          </div>
        </StyledTechList>
      </>
    );
  }

  return null;
};
