import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {

    return (
        <Container>

        <NavBar />

        <Content>

          <Outlet />
          
        </Content>

        <FooterStyle>

          <Footer />

        </FooterStyle>
        
      </Container>
    )
}


const Container = styled.div`

display: flex;
flex-direction: column;
min-height: 100vh;

`;

const Content = styled.main`

  flex: 1;

`;

const FooterStyle = styled.footer`

  
  text-align: center;

`;

export default Dashboard