import React from "react";
import { StyledButtonNav } from "../../../styles/buttons";

export const ButtonNav = ({
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
      width={width}
      height={height}
      backgroundColor={`var(--${backgroundColor})`}
      textColor={`var(--${textColor})`}
      hoverBackgroundColor={`var(--${hoverBackgroundColor})`}
      {...rest}
    >
      {text}
    </StyledButtonNav>
  );
};
