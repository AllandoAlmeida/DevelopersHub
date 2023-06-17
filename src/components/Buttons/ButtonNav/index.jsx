import React from "react";
import { StyledButtonNav } from "../../../styles/buttons";

export const ButtonNav = ({
  to,
  text,
  width,
  height,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  ...rest
}) => {
  return (
    <StyledButtonNav
      to={to}
      width={width}
      height={height}
      backgroundColor={`var(--${backgroundColor})`}
      textColor={textColor}
      hoverBackgroundColor={`var(--${hoverBackgroundColor})`}
      {...rest}
    >
      {text}
    </StyledButtonNav>
  );
};
