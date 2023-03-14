import { StyledMain } from './styles/Main.Styled'
import Section from './Section'
import Aside from './Aside'
import { dataNew } from '../../data'
import AsideInfo from './AsideInfo'
import { Fragment } from 'react'

export default function Main() {
    return (
        <StyledMain>
            <Section />
            <Aside>
                {dataNew.map((item, index) => (
                    <Fragment key={index} >
                        <AsideInfo item={item} />
                        {index !== dataNew.length - 1 && (<hr />)}
                    </Fragment>

                ))}
            </Aside>
        </StyledMain>
    )
}