import styled from 'styled-components';
import logosalida from '../assets/img/salida.png'

const NavBar = () => {
  return (
    <NavBarComponent className='navbar'>
      <LinkHover className='logoNavbar'><h2>SGE</h2></LinkHover>
      <ul>
        <li><LinkHover href='#'>Empleados</LinkHover></li>
        <li><LinkHover href='#'>Departamentos</LinkHover></li>
        <li><LinkHover href='#'>Proyectos</LinkHover></li>
        <li><LinkHover href='#'>Asignaciones</LinkHover></li>
      </ul>
      <LinkHover href='#' className='logout'><img src={logosalida} /><h3>Exit</h3></LinkHover>
    </NavBarComponent>
  );
}

const NavBarComponent = styled.nav`

  display: flex;
  margin: 1rem 0 1rem 1rem;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .logoNavbar {

  display: flex;
  margin: 0 1rem 0 1rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #4d4646;
  
  }

h2{

font-size: 2rem;

}
  ul {

    display: flex;
    list-style: none;
    
  }

li {

  margin-right: 1rem;
}

  .logout {

  display: flex;
  margin: -0.1rem 1rem 0 ;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  }

  @media (max-width: 768px) {
    
    flex-direction: column;
    

    .logoNavbar{ 
  
      margin-top: 0.5rem
    }

    .logout{

      margin-bottom: 0.7rem;

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

  font-size: 1.3rem;
  text-decoration: none;
  color: #1c2833;
  transition: transform 0.3s ease, color 0.3s ease;

   &:hover {
    transform: scale(1.1); /* Escala del enlace al hacer hover */
    color:  #444cf7;
  }


  
`;



export default NavBar;