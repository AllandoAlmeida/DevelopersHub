import { forwardRef, useState } from "react";
import { StyledIcon, StyledSectionInput} from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Input = forwardRef(({ error, label, type, ...rest }, ref) => {
  library.add(faEye, faEyeSlash);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <StyledSectionInput>
      <label htmlFor="">{label}</label>
      <input ref={ref} type={showPassword ? "text" : type}
        {...rest}
      />
      {type === "password" && (
        <StyledIcon onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? "eye-slash" : "eye"} />
        </StyledIcon>
      )} 
      {error ? <p>{error.message}</p> : null}
    </StyledSectionInput>
  );
});