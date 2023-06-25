import { StyledButtonAccess } from "./styles";

export const ButtonToAccess = ({
  type,
  text,
  background,
  textcolor,
  hover,
  ...rest
}) => {
  return (
    <StyledButtonAccess
      background={`var(--${background})`}
      textcolor={textcolor}
      hover={`var(--${hover})`}
      {...rest}
    >
      {text}
    </StyledButtonAccess>
  );
};
