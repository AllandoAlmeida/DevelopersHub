import React from "react";
import { FaSpinner } from "react-icons/fa";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <div className="loading-content">
        <FaSpinner size={40} color="rgb(136, 136, 136)" />
      </div>
      <p>Carregando...</p>
    </LoadingContainer>
  );
};
