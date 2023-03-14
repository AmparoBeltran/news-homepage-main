import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  width: 40%;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGreyishBlue};
    font-size: 1.3em;

    &:hover {
      color: ${({ theme }) => theme.colors.softRed};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: none; */
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: ${({ open }) => (open ? "column" : "row")};
  }
`;

export const Burger = styled.img`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;
