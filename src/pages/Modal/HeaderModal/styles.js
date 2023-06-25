import styled from "styled-components";

export const StyledHeaderModal = styled.header`
  width: 100%;
  height: 5rem;
  background-color: var(--color-grey-2);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;
    padding: 1.2rem 2rem;
    background-color: var(--color-grey-2);
  }

  h1 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
