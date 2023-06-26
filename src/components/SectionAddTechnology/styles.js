import styled from "styled-components";

export const StyledTitleTechnologies = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
  height: 5.3rem;
  padding: 0 1.2rem;
  background-color: var(--color-grey-4);
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 75rem;
    margin: 1.8rem auto;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);
    }
  }
`;
