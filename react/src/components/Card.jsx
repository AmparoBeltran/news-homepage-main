import CardInfo from "./CardInfo"
import { CardStyled } from "./styles/Card.styled"
export default function Card({ children }) {
    return (
        <CardStyled>

            {children}
        </CardStyled>
    )
}