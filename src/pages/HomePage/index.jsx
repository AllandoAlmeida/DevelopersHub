import React from "react";
import { LoginSection } from "../../components/Section/LoginSection";
import { ButtonToAccess } from "../../components/Buttons/ButtonToAccess";
import { StyledDivLogin, StyledDivTitle, StyledLink } from "./styles";
import { HeaderHome } from "../../components/Headers/HearderHome";

export const HomePage = () => {
  return (
    <main>
      <HeaderHome />
      <StyledDivLogin>
        <StyledDivTitle>
          <h1>Login</h1>
        </StyledDivTitle>
        <LoginSection />
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
      </StyledDivLogin>
    </main>
  );
};
