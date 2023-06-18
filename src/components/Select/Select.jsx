import { forwardRef } from "react";

import { StyledSelect } from "./styles";


export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
  return (
    <StyledSelect>
      <label htmlFor="">{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </StyledSelect>
  );
});
