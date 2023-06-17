import { forwardRef } from "react";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
