import { ButtonNav } from "../Buttons/ButtonNav";
import { StyledContainerButton, StyledContainerDeleting } from "./styles";

export const DeletingTechnology = ({
  children,
  trueCallback,
  falseCallback,
}) => {
  return (
    <StyledContainerDeleting>
      <div>
        {children}
        <StyledContainerButton>
          <ButtonNav
            width="9.8rem"
            height="4.8rem"
            type="submit"
            text="Sim"
            background="color-color-primary-disable"
            textcolor="color-grey-0"
            hover="color-negative"
            onClick={trueCallback}
          />
          <ButtonNav
            width="9.8rem"
            height="4.8rem"
            type="submit"
            text="Não"
            background="color-color-primary-disable"
            textcolor="color-grey-0"
            hover="color-negative"
            onClick={falseCallback}
          />
        </StyledContainerButton>
      </div>
    </StyledContainerDeleting>
  );
};
