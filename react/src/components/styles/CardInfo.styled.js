import styled from "styled-components";

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 3em;
    margin: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-weight: 600;
    text-decoration: none;
    font-size: 1.3em;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGreyishBlue};
    line-height: 1.8em;
    margin: 0;
    font-size: 1.2em;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-around;
    h1 {
      font-size: 2.5em;
    }
    a {
      font-size: 1em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;
