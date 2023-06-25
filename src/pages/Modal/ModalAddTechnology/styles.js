import styled from "styled-components";

export const StyledContainerModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 369px;
  background-color: var(--color-grey-3);
`;

export const StyledModalItems = styled.div`
  width: 369px;
  height: 342px;
  border-radius: 0.4rem;
  background-color: var(--color-grey-3);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1.5rem;
    padding: 1.2rem;
  }
`;
