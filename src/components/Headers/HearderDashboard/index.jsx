import logo from "../../../assets/Logo.svg";
import { ButtonNav } from "../../Buttons/ButtonNav";
import { useNavigate } from "react-router-dom";
import { StyledHeaderDash } from "./styles";

export const HeaderDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeaderDash>
      <div>
        <div>
          <img src={logo} alt="logo Kenzie Hub" />
        </div>
        <ButtonNav
          width="5.5rem"
          height="3.2rem"
          type="button"
          text="Sair"
          backgroundColor="color-grey-3"
          textColor="color-grey-0"
          hoverBackgroundColor="color-grey-2"
          onClick={handleLogout}
        />
      </div>
    </StyledHeaderDash>
  );
};
