import styled from "styled-components";

export const ArticleStyled = styled.article`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2.7em 0;

  h1 {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-size: 5em;
    line-height: 1em;
    margin: 0;
    align-self: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.6em;
    grid-template-columns: auto;
    gap: 2em;
  }
`;
