import logo from "../../../assets/Logo.svg";
import { ButtonNav } from "../../Buttons/ButtonNav";
import { useNavigate } from "react-router-dom";
import { StyledHeaderRegister } from "./styles";

export const HeaderRegister = () => {
  const navigate = useNavigate();

  const handletoGoBack = () => {
    navigate("/");
  };

  return (
    <StyledHeaderRegister>
      <div>
        <div>
          <img src={logo} alt="logo Kenzie Hub" />
        </div>
        <ButtonNav
          width="5.5rem"
          height="3.2rem"
          type="button"
          text="voltar"
          backgroundColor="color-grey-3"
          textColor="color-grey-0"
          hoverBackgroundColor="color-grey-2"
          onClick={handletoGoBack}
        />
      </div>
    </StyledHeaderRegister>
  );
};
