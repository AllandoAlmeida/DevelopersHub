import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useContext } from "react";
import {
  
  StyledSectionProfile,
} from "./styles";

import { TechnologiesSection } from "../../components/Section/TechnologiesSection";
import { HeaderDashboard } from "../../components/Headers/HearderDashboard";
import { UserContext } from "../../providers/UserContext";
import { ModalAddTechnology } from "../Modal/ModalAddTechnology";
import { ModalEditTechnology } from "../Modal/ModalEditTechnology";
import { TechnologiesContext } from "../../providers/TechnologiesContext";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { isModalEditTechsOpen, isModalAddTechsOpen } =
    useContext(TechnologiesContext);


  return (
    <main>
      {isModalAddTechsOpen && <ModalAddTechnology />}
      <HeaderDashboard />
      {isModalEditTechsOpen && <ModalEditTechnology />}
      <StyledSectionProfile>
        <div>
          <h1>{user?.name}</h1>
          <p>{user?.course_module}</p>
        </div>
      </StyledSectionProfile>
      <TechnologiesSection />
    </main>
  );
};