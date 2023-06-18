import { forwardRef, useState } from "react";
import { StyledSectionInput, StyledTogglePasswordButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faEye, faEyeSlash);

export const Input = forwardRef(({ error, label, type, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <StyledSectionInput>
      <label htmlFor="">{label}</label>
      <input ref={ref} type={showPassword ? "text" : type} {...rest} />
      {type === "password" && (
        <StyledTogglePasswordButton onClick={togglePasswordVisibility}>
          <FontAwesomeIcon
            icon={showPassword ? ["fas", "eye-slash"] : ["fas", "eye"]}
          />
        </StyledTogglePasswordButton>
      )}
      {error ? <p>{error.message}</p> : null}
    </StyledSectionInput>
  );
});


