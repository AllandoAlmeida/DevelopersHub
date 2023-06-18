import styled from "styled-components";

export const StyledHeaderDash = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.2rem;
  background-color: var(--color-grey-4);
  border-bottom: 1px solid var(--color-grey-3);


  div:nth-child(1) {
    display: flex;
    flex-direction:row;
    align-items: center;
    width: 100%;
    max-width: 75rem;
    height: 7.2rem;
    
  }

  img {
    height: 1.4rem;
    width: 10.5rem;
  }
`;
