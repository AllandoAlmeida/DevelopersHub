import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;
  width: 100%;
  max-width: 37rem;
  margin: 0 auto;
  padding: 2.8rem 2rem;
  background-color: var(--color-grey-3);

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