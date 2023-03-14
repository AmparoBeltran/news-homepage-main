import styled from "styled-components";

export const AsideInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  a {
    margin: 0;
    font-size: 1.5em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.offWhite};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.softOrange};
    }
  }
  p {
    margin: 0;
    line-height: 1.9em;
    font-size: 1.1em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    a {
      font-size: 1.35em;
    }

    p {
      font-size: 1em;
    }
  }
`;
