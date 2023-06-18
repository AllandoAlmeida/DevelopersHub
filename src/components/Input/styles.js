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

  input {
    border: 0.012rem solid var(--color-grey-2);
    background-color: var(--color-grey-2);
    width: 100%;
    height: 4.8rem;
    padding: 1.05rem 1.6rem;
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

  p{
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
  background-color: transparent;
  border: none;
  color: var(--color-grey-1);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.6rem;
  cursor: pointer;
  padding: 0;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

