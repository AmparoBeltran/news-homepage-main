import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  gap: 2em;
  padding: 2em 0;

  img {
    width: 132px;
    height: 167px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 1em;
    padding: 1em;
  }

  img {
    width: 116px;
    height: 147px;
  }
`;
