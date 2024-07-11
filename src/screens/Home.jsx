import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';


const Home = () => {
  const [buttonVisibility, setButtonVisibility] = useState({
    login: true,
    register: true
  });

  const location = useLocation();
  const hideLogo = location.pathname !== '/' && !location.pathname.startsWith('/home');

  const handleLoginClick = () => {
    setButtonVisibility({ login: false, register: true });
  };

  const handleRegisterClick = () => {
    setButtonVisibility({ login: true, register: false });
  };


  useEffect(() => {
    if (location.pathname === '/' || location.pathname.startsWith('/home')) {
      setButtonVisibility({ login: true, register: true });
    }
  }, [location]);


  return (
    <HomeComponent>
      {!hideLogo && (
        <H1Comp>
          <StyledLink to="/home"><h1>SGE</h1></StyledLink>
        </H1Comp>
      )}

      <h3>Sistema de Gestión de Empleados</h3>
      <h5>Version 1.0</h5>

      <ButtonContainer>
        {buttonVisibility.login && (
          <StyledLink to="/login">
            <StyledButton onClick={handleLoginClick}>Ingresar</StyledButton>
          </StyledLink>
        )}

        {buttonVisibility.register && (
          <StyledLink to="/register">
            <StyledButton onClick={handleRegisterClick}>Registrar Usuario</StyledButton>
          </StyledLink>
        )}
      </ButtonContainer>

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </HomeComponent>
  );
};

const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  margin: 0;
  padding: 1rem;

  h1 {
    font-size: 10rem;
    text-shadow: rgba(68, 76, 247, 0.8) 3px 3px;
    text-decoration: underline 2px #444cf7;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;
  color: #1c2833;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #444cf7;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 60px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #1c2833;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444cf7;
  }
`;

const H1Comp = styled.h1`
  transition: transform 0.9s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Home;
