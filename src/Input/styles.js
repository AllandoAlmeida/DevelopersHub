import styled from "styled-components";

export const StyledSectionInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  label{
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;

    color:var(--color-grey-0)

  }

  input {
    border: 0.012rem solid var(--color-grey-0);
    background-color: var(--color-grey-2);
    width: 100%;
    height: 4.8rem;
    padding: 1.05rem 1.6rem;
    border-radius: 0.4rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;

    color:var(--color-grey-0)
  }
`;
