import styled from "styled-components";

export const MainArticleInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;

  p {
    color: ${({ theme }) => theme.colors.darkGreyishBlue};
    font-size: 1.5em;
    line-height: 1.6;
    margin: 0;
  }

  a {
    text-decoration: none;
    width: max-content;
    font-size: 1.4em;
    letter-spacing: 0.3em;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    padding: 1.1em 1.8em;
    background-color: ${({ theme }) => theme.colors.softRed};
    color: ${({ theme }) => theme.colors.offWhite};

    &:hover {
      background-color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.6em;
    }
    a {
      font-size: 1.6em;
    }
  }
`;
