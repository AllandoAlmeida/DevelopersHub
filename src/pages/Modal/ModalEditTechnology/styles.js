import styled from "styled-components";

export const StyledContainerModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(20rem 10% 36.9rem);
  background-color: var(--color-grey-3);
  border-radius: 0.4rem;
`;

export const StyledModalItems = styled.div`
  max-width: 365px;
  height: 347px;
  border-radius: 0.4rem;
  background-color: var(--color-grey-3);
  border: 0.5rem solid var(--color-grey-3);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    gap: 1rem;
    padding: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const StyledModalButton = styled.div`
display: flex;
gap: 5rem;
`
