import { useContext } from "react";
import { HeaderDashboard } from "../../components/Headers/HearderDashboard";
import { ModalAddTechnology } from "../Modal/ModalAddTechnology";
import { ModalEditTechnology } from "../Modal/ModalEditTechnology";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import { ProfileSection } from "../../components/ProfileSection";
import { TechnologiesSection } from "../../components/TechnologiesSection";
import { SectionAddTechnology } from "../../components/SectionAddTechnology";

export const DashboardPage = () => {
  const { isModalEditTechsOpen, isModalAddTechsOpen } =
    useContext(TechnologiesContext);

  return (
    <>
      <HeaderDashboard />
      <ProfileSection />
      <SectionAddTechnology />
      <TechnologiesSection />
      {isModalAddTechsOpen && <ModalAddTechnology />}
      {isModalEditTechsOpen && <ModalEditTechnology />}
    </>
  );
};
