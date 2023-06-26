import React from "react";
import { StyledButtonNav } from "./styles";

export const ButtonNav = ({
  text,
  width,
  height,
  background,
  textcolor,
  hover,
  ...rest
}) => {
  return (
    <StyledButtonNav
      width={width}
      height={height}
      background={`var(--${background})`}
      textcolor={`var(--${textcolor})`}
      hover={`var(--${hover})`}
      {...rest}
    >
      {text}
    </StyledButtonNav>
  );
};
