import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 37rem;
  margin: 4rem auto 0;
  padding: 0 1.2rem;

  h1 {
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledDivLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 37rem;
  height: 50.2rem;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: var(--color-grey-3);
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color:var(--color-grey-1)
  }
`;
