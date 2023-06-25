import { ButtonNav } from "../../../components/Buttons/ButtonNav";
import { StyledHeaderModal } from "./styles";
export const HeaderModal = ({ text, onClick }) => {
  return (
    <StyledHeaderModal>
      <div>
        <h1>{text}</h1>
        <ButtonNav
          width="1.1rem"
          height="2.6rem"
          type="button"
          text="X"
          backgroundcolor="color-grey-2"
          textcolor="color-grey-1"
          hoverbackgroundcolor="color-grey-2"
          onClick={() => onClick(false)}
        />
      </div>
    </StyledHeaderModal>
  );
};
