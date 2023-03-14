import styled from "styled-components";

export const StyledDesktopImage = styled.img`
  width: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
