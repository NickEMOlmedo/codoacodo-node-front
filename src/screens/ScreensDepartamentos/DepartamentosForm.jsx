import styled from "styled-components";
import { useState } from "react";
const DepartamentoForm = () => {

  {/*}
  const [nombre,setNombre] = useState;
  const [ubicacion, setUbicacion] = useState;

*/}

  return (
    <DepartamentoFormComponent>
      <form className="empleadoForm">
        <h2 className="formTittle">Cargar Departamento:</h2>
        <p className="formParagraph">Porfavor ingresa un nuevo Departamento:</p>
        <div className="formContainer">
          <div className="formGroup">
            <input
              type="text"
              id="nombre"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setNombre(event.target.value)
              }}
            />
            <label htmlFor="name" className="formLabel">
              Nombre:
            </label>
            <span className="formLine"></span>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="ubicacion"
              className="formInput"
              placeholder=" "
              onChange={(event) => {
                setUbicacion(event.target.value)
              }}
            />
            <label htmlFor="nombre" className="formLabel">
              Ubicacion:
            </label>
            <span className="formLine"></span>
          </div>
          <input type="submit" className="formSubmit" value="Cargar Departamento" />
        </div>
      </form>
    </DepartamentoFormComponent>
  )
}

const DepartamentoFormComponent = styled.form`

  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  padding: 4.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);


  .formTittle {
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
  border-bottom: 1px solid var(--color);
  font-family: "Roboto", sans-serif;
}

.formLabel {
  color: var(--color);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 5px;
  transform: translateY(10px);
  transition: transform 0.5s color 0.3s;
}

.formInput:focus + .formLabel,
.formInput:not(:placeholder-shown) + .formLabel {
  transform: translateY(-12px) scale(0.9);
  transform-origin: left top;
  color: #3866f2;
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
}

.formLine {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3866f2;
  transform: scale(0);
  transform: left bottom;
  transition: transform 0.4s;
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

  .formTittle {
    font-size: 1.8rem;
  }
}

`;


export default DepartamentoForm;
