import styled from "styled-components";

export const StyledHeaderRegister = styled.header`
  position: sticky;
  background-color:#000000;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.2rem;


  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 37rem;
    height: 7.2rem;
  }

  img {
    height: 1.4rem;
    width: 10.5rem;
  }
`;
