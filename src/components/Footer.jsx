import styled from 'styled-components';
import iconoGithub from '../assets/img/icons-github.png'

const Footer = () => {

    return (

        <FooterComponent className='footer'>

            <LinkHover className='logoFooter'><h2>SGE</h2></LinkHover>
            <h3>Desarrolladores:</h3>
            <ul>
                <img src={iconoGithub} className='img-links'></img><li><LinkHover href='https://github.com/NickEMOlmedo'>@NickEMOlmedo</LinkHover></li>
                <img src={iconoGithub} className='img-links'></img><li><LinkHover href='https://github.com/AnaMateasovich'>@AnaMateasovich</LinkHover></li>
                <img src={iconoGithub} className='img-links'></img><li><LinkHover href='https://github.com/diegoramos99'>@diegoramos99</LinkHover></li>
            </ul>

        </FooterComponent>
    )
}

const FooterComponent = styled.nav`

  display: flex;
  margin: 2rem 0 3rem 0;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .logoFooter{

  display: flex;
  margin: 0 1rem 0 1rem;
  text-decoration: none;
  color: #4d4646;
  
  }

  h2{

font-size: 2rem;

}

h3{
font-weight: bold;
margin: 0 1rem 0 1rem;

}
  ul {

    display: flex;
    list-style: none;
    
  }

li {

  margin-right: 1rem;
}

.img-links{

display: inline-flex;
width: 25px;
margin-right: 5px;

 }

 @media (max-width: 768px) {
    
    flex-direction: column;
    

    .logoFooter{ 
  
      margin-top: 0.5rem
    }


    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }

`;


const LinkHover = styled.a`

font - size: 1rem;
font - weight: bold;
text - decoration: none;
color: #1c2833;
transition: transform 0.3s ease, color 0.3s ease;

   &:hover {
    transform: scale(1.1); /* Escala del enlace al hacer hover */
    color:  #444cf7;
}

`;

export default Footer