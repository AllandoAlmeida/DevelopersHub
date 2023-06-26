import { forwardRef } from "react";
import { StyledSectionSelect } from "./styles";

export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
  return (
    <StyledSectionSelect>
      <label>{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </StyledSectionSelect>
  );
});
