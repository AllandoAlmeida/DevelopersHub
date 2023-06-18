import React from "react";
import { LoginSection } from "../../components/Section/LoginSection";
import { HeaderHome } from "../../components/Headers/HearderHome";
import { TitleHomePage } from "../../components/fragments/TitleHomePage/Index";
import { SectionNavRegister } from "../../components/fragments/SectionNavRegister";

export const HomePage = () => {
  return (
    <main>
      <HeaderHome />
      <section>
        <TitleHomePage />
        <LoginSection />
        <SectionNavRegister />
      </section>
    </main>
  );
};
