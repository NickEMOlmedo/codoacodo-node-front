import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import responseRegister from '/src/components/responseRegister';
import alertSuccessRegister from '/src/components/alertSuccessRegister';
import alertError from '/src/components/alertError';
import { Link, Navigate } from "react-router-dom";

const RegisterForm = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmitHandler = async (data) => {

    const url = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/usuarios/register/';

    const credentials = {

      username: data.email,
      password: data.password,

    };

    try {
      const response = await responseRegister(url, credentials);

      console.log(response);

      if (response.success) {
        
        alertSuccessRegister();
        setLoggedIn(true);

      } else {
        console.error("Error al registrar usuario:", response.message);
        alertError(response.message || "Error al registrar usuario");
      }

    } catch (error) {
      console.error("Error en la solicitud:", error);
      alertError(error.message || "Error en la solicitud");
    }

    setTimeout(() => {
      reset();
    }, 2000);
  };

  if (loggedIn) {
    
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <RegisterFormComponent onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className="formTitle">Registro</h2>
        <p className="formParagraph">Por favor completa los siguientes campos:</p>
        <div className="formContainer">
          <div className="formGroup">
            <label htmlFor="email" className="formLabel">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              className="formInput"
              placeholder=" "
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de correo electrónico inválido"
                }
              })}
            />
            {errors.email && <p className="errorMessage">{errors.email.message}</p>}
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="formLabel">Contraseña:</label>
            <input
              type="password"
              id="password"
              className="formInput"
              placeholder=" "
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: { value: 6, message: "La contraseña debe tener al menos seis caracteres" }
              })}
            />
            {errors.password && <p className="errorMessage">{errors.password.message}</p>}
            <span className="formLine"></span>
          </div>
          <input type="submit" className="formSubmit" value="Registrar" />
        </div>
      </RegisterFormComponent>

      <StyledLink to="/">Volver</StyledLink>
    </>
  );
};

const RegisterFormComponent = styled.form`
  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 400px;
  text-align: center;
  padding: 4.5rem 3rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .formTitle {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .formParagraph {
    font-weight: 300;
  }

  .formContainer {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
  }

  .formGroup {
    position: relative;
    --color: #5757577e;
  }

  .formInput {
    width: 100%;
    background: none;
    color: #706c6c;
    font-size: 1rem;
    padding: 0.6rem 0.3rem;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
  }

  .formLabel {
    display:flex;
    justify-content: flex-start;
    color: #3866f2;
    border: none;
    transition: transform 0.5s color 0.3s;
  }

  .formSubmit {
    background-color: #3866f2;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    padding: 0.8em;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
  }

  .formLine {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #3866f2;
  }

  .errorMessage {
    color: tomato;
    font-size: 10px;
  }

  .formInput:focus ~ .formLine,
  .formInput:not(:placeholder-shown) ~ .formLine {
    transform: scale(1);
  }

  .formInput:not(:placeholder-shown) {
    color: #4d4646;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    .formTitle {
      font-size: 1.8rem;
    }
  }
`;
const StyledLink = styled(Link)`

  width: 150px;
  height: 60px;
  margin-top: -1rem;
  padding:  1rem;
  font-size: 1rem;
  color: white;
  background-color: #1c2833;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #444cf7;
  }

`;

export default RegisterForm;
