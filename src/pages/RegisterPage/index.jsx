import { HeaderRegister } from "../../components/Headers/HearderRegister";
import { RegistrationSection } from "../../components/Section/RegistrationSection";
import { TitleRegisterPage } from "../../components/fragments/TitleRegisterPage/Index";

export const RegisterPage = () => {
  return (
    <div>
      <HeaderRegister />
      <TitleRegisterPage />
      <RegistrationSection />
    </div>
  );
};
