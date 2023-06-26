import React from "react";
import { StyledTechCard } from "./styles";

export const TechnologyCard = ({ action, technology }) => {
  return (
    <StyledTechCard onClick={() => action(technology)}>
      <li>{technology.title}</li>
      <li>{technology.status}</li>
    </StyledTechCard>
  );
};
