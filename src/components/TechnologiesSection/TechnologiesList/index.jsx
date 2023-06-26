import React, { useContext } from "react";

import { StyledTechList } from "./styles";
import { TechnologiesContext } from "../../../providers/TechnologiesContext";
import { UserContext } from "../../../providers/UserContext";
import { EmptyTechList } from "../../EmptyTechList";
import { TechnologyCard } from "../TechnologyCard";

export const TechnologiesList = () => {
  const { user } = useContext(UserContext);
  const { setIsModalEditTechsOpen, setTecnologyToEdit, technologies } =
    useContext(TechnologiesContext);

  const handleEditTechs = (technology) => {
    setTecnologyToEdit(technology);
    setIsModalEditTechsOpen(true);
  };

  if (user && Array.isArray(technologies)) {
    return (
      <>
        <StyledTechList>
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
        </StyledTechList>
      </>
    );
  }

  return null;
};
