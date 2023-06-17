import React from "react";
import { Link } from "react-router-dom";
import { LoginSection } from "../../components/Section/LoginSection";
import { ButtonToAccess } from "../../components/Buttons/ButtonToAccess";

export const HomePage = () => {
  return (
    <div>
      <LoginSection />
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <ButtonToAccess
            type="submit"
            text="Cadastre-se"
            backgroundColor="color-color-primary"
            textColor="white"
            hoverBackgroundColor="color-color-primary-50"
          />
        </Link>
      </div>
    </div>
  );
};
