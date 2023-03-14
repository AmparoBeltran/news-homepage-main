import { AsideInfoStyled } from "./styles/AsideInfoStyled";

export default function AsideInfo({item: {title, info}}) {
    return(
        <AsideInfoStyled>
       
          <a href="#">{title}</a>
          <p>{info}</p>
          
        </AsideInfoStyled>
    )
}