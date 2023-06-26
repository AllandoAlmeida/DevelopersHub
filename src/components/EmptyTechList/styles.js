import styled from "styled-components";

export const StyledInformation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: var(--color-grey-4);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 75rem;
    gap: 1rem;
    height: 90%;
    padding: 0;
    background-color: var(--color-grey-4);

    border-radius: 0.5rem;

    p:nth-child(1) {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
      color: var(--color-grey-1);
    }
    p:nth-child(2) {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-grey-1);
    }
  }
`;
