import styled from "styled-components";

export const StyledInformation = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 7.2rem - 11.8rem);
  margin: 0 auto;
  padding: 0 1.2rem;
  background-color: var(--color-grey-4);
  border-bottom: 1px solid var(--color-grey-3);

  div {
    display: none;
    flex-direction: column;
    width: 100%;
    max-width: 75rem;
    margin: 3.7rem auto;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);
    }
    p {
      margin-top: 2.3rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-grey-1);
    }
    @media screen and (min-width: 36.8rem) {
    display: flex;
  }

  }
`;
