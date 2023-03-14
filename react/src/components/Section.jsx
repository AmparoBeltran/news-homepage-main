import { SectionStyled } from "./styles/Section.Styled"
import Article from "./Article"
import ImageDesktop from "./ImageDesktop"
import ImageMobile from "./ImageMobile"

export default function Section (){
    return(
        <SectionStyled> 
          <ImageDesktop />
          <ImageMobile />
          <Article />
        </SectionStyled>
        
        )
    
}