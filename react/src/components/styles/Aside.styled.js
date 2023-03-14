import styled from "styled-components";

export const AsideStyled = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  color: ${({ theme }) => theme.colors.grayishBlue};
  padding: 3em;
  gap: 2em;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.softOrange};
    font-size: 2.4em;
  }

  hr {
    color: ${({ theme }) => theme.colors.grayishBlue};
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2em 1em;
  }
`;
