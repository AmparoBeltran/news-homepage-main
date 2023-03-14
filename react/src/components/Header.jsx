import { StyledHeader } from './styles/Header.styled'
import Nav from './Nav'
import { Burger } from './styles/Nav.Styled'
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';



export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>

      <img src="./images/logo.svg" alt="logo" />
      <Nav />
      <Burger src="./images/icon-menu.svg" alt="open menu" onClick={() => setOpen(true)} />
      {open && <MobileMenu close={() => setOpen(false)} />}
    </StyledHeader>

  )
}


