import { AsideStyled } from "./styles/Aside.styled";
export default function Aside({children}) {
    return(
        <AsideStyled>
        <h1>New</h1>
        
        {children}
        
        </AsideStyled>
    )
}