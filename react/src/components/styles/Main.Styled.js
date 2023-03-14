import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 90%;
    justify-content: center;
  }
`;
