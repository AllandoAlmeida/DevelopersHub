import styled from "styled-components";

export const StyledSectionSelect = styled.div`

p{
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;
    margin-bottom: 0.2rem;
    color: var(--color-negative);

  }
  
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.6rem;
    margin-bottom: 1.5rem;

    color: var(--color-grey-0);
  }

  select {
    border: 0.012rem solid var(--color-grey-3);
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

    color: var(--color-grey-0);

    :hover {
        border: 0.012rem solid var(--color-grey-1);
        color: var(--color-grey-1);
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

      color: var(--color-grey-0);

      
    }
    
  }
`;
