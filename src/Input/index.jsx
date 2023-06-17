import { forwardRef } from "react";
import { StyledSectionInput } from "./styles";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <StyledSectionInput>
      <label htmlFor="">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </StyledSectionInput>
  );
});
