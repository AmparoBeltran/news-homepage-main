import Nav from "./Nav";
import { MobileMenuStyled } from './styles/MobileMenu.Styled';
import { Overlay } from "./styles/Overlay.styled";

export default function MobileMenu({ close }) {
    return (
        <>
            <Overlay />
            <MobileMenuStyled>
                <img src="./images/icon-menu-close.svg" alt='close' onClick={close} />
                <Nav open={true} />
            </MobileMenuStyled>
        </>


    )
}