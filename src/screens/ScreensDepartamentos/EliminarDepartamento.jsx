import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import MostrarEmpleado from "../../components/MostrarEmpleado"


const EliminarDepartamento = () => {

    const [selectNombre, setSelectNombre] = useState("");

    const handleNombre = (nombre) => {

        setSelectNombre(nombre);
    };

   

 


    return (
        <EliminarDepartamentoComponent>

            <form className="empleadoForm">
                <h2 className="formTittle">Eliminar Departamento:</h2>
                <p className="formParagraph">Porfavor ingresa el nombre del departamento:</p>
                <div className="formContainer">
                    <div className="formGroup">

                        <SearchBar handleNombre={handleNombre} />

                        {selectNombre && <MostrarEmpleado empleado={selectNombre} />}

                    </div>
                    <input type="submit" className="formSubmit" value="Eliminar Departamento" />
                </div>
            </form>
        </EliminarDepartamentoComponent>
    )
}

const EliminarDepartamentoComponent = styled.form`

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

.formLabel {
  color: var(--color);
  cursor: pointer;
  transform: translateY(10px);
  transition: transform 0.5s color 0.3s;
}

@media (max-width: 768px) {

margin-bottom: 2rem;

  .formTittle {
    font-size: 1.8rem;
  }
}

`;

export default EliminarDepartamento;