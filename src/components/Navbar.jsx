import {Link} from 'react-router-dom';
import styled from 'styled-components';
import iconoempleado from '../assets/img/icono-empleado.png';
import iconodepartamento from '../assets/img/icono-departamento.png';
import iconoproyectos from '../assets/img/icono-proyecto.png';
import iconoasignaciones from '../assets/img/icono-asignacion.png';
import logosalida from '../assets/img/salida.png';

const NavBar = () => {
  return (
    <NavBarComponent className='navbar'>
      <LinkHover className='logoNavbar'><h2>SGE</h2></LinkHover>
      <ul>
        <img src={iconoempleado} className='img-links' alt='icono empleado' />
        <li><StyledLink to='/empleados'>Empleados</StyledLink></li>
        <img src={iconodepartamento} className='img-links' alt='icono departamento' />
        <li><StyledLink to='/departamentos'>Departamentos</StyledLink></li>
        <img src={iconoproyectos} className='img-links' alt='icono proyectos' />
        <li><StyledLink to='/proyectos'>Proyectos</StyledLink></li>
        <img src={iconoasignaciones} className='img-links' alt='icono asignaciones' />
        <li><StyledLink to='/asignaciones'>Asignaciones</StyledLink></li>
      </ul>
      <LinkHover className='logout'><img src={logosalida} alt='salida' /><Link className="linksalida" to="*"><h3>Exit</h3></Link></LinkHover>
    </NavBarComponent>
  );
};

const NavBarComponent = styled.nav`

  display: flex;
  margin: 2rem 0 3rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .logoNavbar {

    display: flex;
    margin: 0 1rem 0 1rem;
    text-decoration: none;
    color: #4d4646;
  }

  h2 {

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
    margin-right: 1rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;

  }

  .img-links {

    display: inline-flex;
    width: 25px;
    margin-right: 5px;
    color: inherit;

  }

  .linksalida{

    text-decoration: none;
    color: inherit;

  }

  @media (max-width: 768px) {

    flex-direction: column;

    .logoNavbar {

      margin-top: 0.5rem;

    }

    .logout {

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
    transform: scale(1.1);
    color: #444cf7;
  }
`;

const StyledLink = styled(Link)`

  font-size: 1.3rem;
  text-decoration: none;
  color: #1c2833;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {

    transform: scale(1.1);
    color: #444cf7;

  }

`;

export default NavBar;
