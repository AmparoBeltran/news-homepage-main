import { StyledNav } from "./styles/Nav.Styled"

export default function Nav({ open = false }) {
    return (
        <StyledNav open={open}>
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </StyledNav>

    )
}