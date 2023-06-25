import logo from "../../../assets/Logo.svg";
import { ButtonNav } from "../../Buttons/ButtonNav";
import { StyledHeaderDash } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";


export const HeaderDashboard = () => {

  const {Logout} = useContext (UserContext)

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
          backgroundcolor="color-grey-3"
          textcolor="color-grey-0"
          hoverbackgroundcolor="color-grey-2"
          onClick={Logout}
        />
      </div>
    </StyledHeaderDash>
  );
};
