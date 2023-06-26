import { StyledLinkWrapper, StyledNavRegister } from "./styles";

export const SectionNavRegister = () => {
  return (
    <StyledNavRegister>
      <p>Ainda não possui uma conta?</p>
      <StyledLinkWrapper
        to="/register"
        background="color-grey-1"
        textcolor="white"
        hoverr="color-grey-2"
      >
        Cadastre-se
      </StyledLinkWrapper>
    </StyledNavRegister>
  );
};
