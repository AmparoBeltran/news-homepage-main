import Card from "./Card";
import { dataArticles } from "../../data";
import CardInfo from './CardInfo';
import { CardsContainerStyled } from './styles/CardsContainer.styled';

export default function CardsContainer() {
    return (
        <CardsContainerStyled>
            {dataArticles.map((item, index) => (
                <Card key={index}>
                    <img src={`./images/${item.image}`} alt="article image" />

                    <CardInfo index={index} item={item} />
                </Card>

            ))}
        </CardsContainerStyled>
    )
}