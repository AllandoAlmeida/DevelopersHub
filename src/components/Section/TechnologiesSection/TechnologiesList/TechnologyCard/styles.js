import styled from "styled-components";

export const StyledTechCard = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 73rem;
  height: 4.9rem;
  margin: 0.15rem auto 1.6rem;
  padding: 0 2.2rem;
  background-color: var(--color-grey-4);
  border-radius: 0.4rem;


  li:nth-child(1) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
  }

  li:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    text-align: right;
    color: #868e96;
  }
`;
