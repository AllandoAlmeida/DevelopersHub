import styled from "styled-components";

export const StyledSectionProfile = styled.section`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.8rem;
  margin: 0 auto;
  padding: 0 1.2rem;
  background-color: var(--color-grey-4);
  border-bottom: 1px solid var(--color-grey-3);

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    height: 11.8rem;
    margin: 0 auto;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--color-grey-1);
    }
  }
`;
