import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledNavRegister = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 3rem;
  width: 100%;
  max-width: 37rem;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  background-color: var(--color-grey-3);
  p {
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
`

export const StyledLinkWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.8rem;

  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.8rem;

  border-radius: 0.4rem;

  background-color: var(--color-grey-1);
  color: ${props => props.textcolor || "var(--default-text-color)"};

  &:hover {
    background-color: var(--color-grey-2);
  }
`;