import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import MostrarEmpleado from "../../components/MostrarEmpleado"
import alertQuestion from "../../components/alertQuestion"
import axios from "axios";
import alertSuccess from "../../components/alertSuccess";
import alertError from "../../components/alertError";


const EliminarEmpleado = () => {

  const [selectNombre, setSelectNombre] = useState("");

  const handleNombre = (nombre) => {

    setSelectNombre(nombre);
  };

  const realizarBusqueda = async () => {

    const URLBUSQUEDA = '';

    const URLELIMINAR = '';

    try {

      const response = await axios.get(URLBUSQUEDA, {

        params: { search: selectNombre },

      });

      const { dni } = response.data;

      if (response.status === 200 && response.data.status === 'success') {

        const deleteEmpleado = await axios.post(URLELIMINAR, dni);

        if (deleteEmpleado.status === 200) {

          alertSuccess();

        } else {

          alertError();
        }
      } else {

        console.error('Error en la búsqueda:', response.data.message);

      }
    } catch (error) {

      console.error('Error en la búsqueda:', error);

    }
  };

  const confirmarEliminar = () => {

    if (selectNombre) {

      alertQuestion({

        elemento: "Empleado",

        titulo: selectNombre.nombre,

        esConfirmado: realizarBusqueda,

      });

    } else {

      console.error("No se ha seleccionado ningún empleado para eliminar.");
    }
  };

  return (
    
    <EliminarEmpleadoComponent>
      <form className="empleadoForm" onSubmit={confirmarEliminar}>
        <h2 className="formTittle">Eliminar Empleado:</h2>
        <p className="formParagraph">Por favor ingresa el nombre del empleado:</p>
        <div className="formContainer">
          <div className="formGroup">
            <SearchBar handleNombre={handleNombre} />
            {selectNombre && <MostrarEmpleado empleado={selectNombre} />}
          </div>
          <input type="submit" className="formSubmit" value="Eliminar Empleado" />
        </div>
      </form>
    </EliminarEmpleadoComponent>

  )
}

const EliminarEmpleadoComponent = styled.form`

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


export default EliminarEmpleado;
