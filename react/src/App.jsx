import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/MainContainer.styled'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import Main from './components/Main';
import CardsContainer from './components/CardsContainer';


const theme = {
  colors: {
    asidebg: 'hsl(240, 100%, 5%)',
    softOrange: 'hsl(35, 77%, 62%)',
    offWhite:'hsl(36, 100%, 99%)',
    grayishBlue: 'hsl(233, 8%, 79%)',
    darkGreyishBlue: 'hsl(236, 13%, 42%)',
    softRed: 'hsl(5, 85%, 63%)',
    veryDarkBlue: 'hsl(240, 100%, 5%)',

  },

  mobile: '768px'
}

 

function App() {

  return (
  <ThemeProvider theme = {theme}>
    <>     
      <Container>
      <GlobalStyles />
      <Header />
     <Main />
     <CardsContainer />
    
      </Container>
     </>
  </ThemeProvider>
   
  )
}

export default App
