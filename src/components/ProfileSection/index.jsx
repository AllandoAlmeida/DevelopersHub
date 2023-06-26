import { useContext } from "react";
import { StyledSectionProfile } from "./styles";
import { UserContext } from "../../providers/UserContext";

export const ProfileSection = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledSectionProfile>
      <div>
        <h1>{user?.name}</h1>
        <p>{user?.course_module}</p>
      </div>
    </StyledSectionProfile>
  );
};
