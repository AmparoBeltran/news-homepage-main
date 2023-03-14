import { CardInfoStyled } from "./styles/CardInfo.styled";

export default function CardInfo({ item: { title, info }, index }) {
    return (
        <CardInfoStyled>
            <h1>0{index + 1}</h1>
            <a href="#">{title}</a>
            <p>{info}</p>

        </CardInfoStyled>
    )
}