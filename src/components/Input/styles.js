import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledSectionInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;
    margin-bottom: 0.2rem;
    color: var(--color-grey-0);
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  input {
    border: 0.012rem solid var(--color-grey-2);
    background-color: var(--color-grey-2);
    width: 100%;
    height: 4.8rem;
    padding: 1.05rem 3.6rem 1.05rem 1.6rem;
    border-radius: 0.4rem;
    margin-bottom: 2rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-grey-0);

    :hover {
      border: 0.012rem solid var(--color-grey-1);
      color: var(--color-grey-1);
    }
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;
    margin-bottom: 0.2rem;
    color: var(--color-negative);
  }
`;

export const StyledTogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
  cursor: pointer;
  fill: var(--color-negative);
  transition: fill 0.3s ease;

  &:hover svg {
    fill: var(--color-sucess);
  }
`;
