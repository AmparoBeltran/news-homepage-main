import styled from "styled-components";

export const StyledMobileImage = styled.img`
  width: auto;
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;
