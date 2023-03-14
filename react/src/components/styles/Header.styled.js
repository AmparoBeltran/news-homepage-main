import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 5em 0 3em 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1.8em 0 3em 0;
    margin: 0 auto;
    width: 90%;
  }
`;
