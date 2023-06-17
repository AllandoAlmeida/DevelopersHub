import { StyledButtonAccess } from "../../../styles/buttons";

export const ButtonToAccess = ({
  type,
  text,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  ...rest
}) => {
  return (
    <StyledButtonAccess
      backgroundColor={`var(--${backgroundColor})`}
      textColor={textColor}
      hoverBackgroundColor={`var(--${hoverBackgroundColor})`}
      {...rest}
    >
      {text}
    </StyledButtonAccess>
  );
};
