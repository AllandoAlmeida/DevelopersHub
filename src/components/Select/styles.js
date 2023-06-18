import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;

  label{
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;
    margin-bottom: 1rem;

    color:var(--color-grey-0)

  }

  option {
    border: 0.012rem solid var(--color-grey-0);
    background-color: var(--color-grey-2);
    width: 100%;
    height: 4.8rem;
    padding: 1.05rem 1.6rem;
    border-radius: 0.4rem;

    margin-bottom: 2rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;

    color:var(--color-grey-0);

    :hover{
      border: var(--color-grey-1);
      color: var(--color-grey-1);
    }
  }
`;
