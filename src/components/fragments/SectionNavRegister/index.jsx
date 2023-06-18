import { ButtonToAccess } from "../../Buttons/ButtonToAccess";
import { StyledLink } from "./styles";


export const SectionNavRegister = () => {
  return (
    <div>
      <StyledLink to="/register">
        <h1>Ainda não possui uma conta?</h1>
        <ButtonToAccess
          type="submit"
          text="Cadastre-se"
          backgroundColor="color-grey-1"
          textColor="white"
          hoverBackgroundColor="color-grey-2"
        />
      </StyledLink>
    </div>
  );
};
