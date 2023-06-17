import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButtonAccess = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 4.8rem;

  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;

  border-radius: 0.4rem;

  background-color: ${props => props.backgroundColor || "var(--default-background-color)"};
  color: ${props => props.textColor || "var(--default-text-color)"};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || "var(--default-hover-background-color)"};
  }
`;

export const StyledButtonNav = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "4.8rem"};

  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;

  border-radius: 0.4rem;

  background-color: ${props => props.backgroundColor || "var(--default-background-color)"};
  color: ${props => props.textColor || "var(--default-text-color)"};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || "var(--default-hover-background-color)"};
  }
`;