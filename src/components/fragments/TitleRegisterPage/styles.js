import styled from "styled-components";

export const StyledDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 37rem;
  height: max-content;
  margin: 0 auto;
  padding: 0.7rem 2rem;
  background-color: var(--color-grey-3);

  h1 {
    margin-top: 4rem;
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: 0em;
  }

  p {
    margin-top: 2rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color:var(--color-grey-1)
  }
`;
