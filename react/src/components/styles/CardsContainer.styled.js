import styled from "styled-components";

export const CardsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 2.8em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
    padding: 3em 0;
    gap: 1em;
  }
`;
