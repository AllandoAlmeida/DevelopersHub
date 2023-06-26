import styled from "styled-components";

export const StyledHeaderModal = styled.header`
position:fixed;
top: 0;
left:0;
  width: 100%;
  height: 5.5rem;
  background-color: var(--color-grey-2);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;
    padding: 0 2rem;
    background-color: var(--color-grey-2);
    width: 100%;
  }

  h1 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
`;