import styled from 'styled-components'
import HomeComponent from './modules/home'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin: 1.5em 0;
  align-items: center;
`

const Header = styled.span`
  color: black;
  font-size: 1.2em;
  font-weight: bold;
`

function App() {

  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  )
}

export default App
