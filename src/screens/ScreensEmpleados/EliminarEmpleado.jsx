import styled from "styled-components";
import { useState, useEffect } from "react";
import alertError from "../../components/alertError";
import getData from '/src/components/getData.js'
import MostrarEmpleado from '/src/components/MostrarEmpleado'
import deleteForm from "../../components/deleteForm";
import alertQuestion from "../../components/alertQuestion";

const EliminarEmpleado = () => {

  const [selectEmpleado, setSelectEmpleado] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  useEffect(() => {

    const fetchEmpleados = async () => {

      const url = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/';

      try {
        const response = await getData(url);

        if (response && response.data && response.data.data) {

          setSelectEmpleado(response.data.data);

        } else {

          alertError('Error al cargar los empleados');
        }

      } catch (error) {

        alertError();

      }
    };

    fetchEmpleados();

  }, []);

  const cargarEmpleado = async (dniSelect) => {

    const url = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/${dniSelect}`;

    try {

      const response = await getData(url);

      if (response && response.data && response.data.data && response.data.data.length > 0) {

        const empleado = {

          nombre: response.data.data[0].nombre,
          apellido: response.data.data[0].apellido,
          dni: dniSelect,
          fecha_contratacion: response.data.data[0].fecha_contratacion,
          salario: response.data.data[0].salario,
          departamento_id: response.data.data[0].departamento_id,
          pais: response.data.data[0].pais,
          cargo: response.data.data[0].cargo

        };

        setEmpleadoSeleccionado(empleado);

      } else {

        setEmpleadoSeleccionado(null);

        console.log('No se encontraron datos válidos para el empleado');

      }
    } catch (error) {

      alert(error);
    }
  };

  const deleteAction = async () => {

    const dni = empleadoSeleccionado.dni.trim();

    const url = `http://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/${dni}`;
    
  
    try {

      const isTrue = await deleteForm(url);
  
      if (isTrue) {

        setEmpleadoSeleccionado(null);

      }

      return isTrue;

    } catch (error) {

      alertError(error.message || 'Error al eliminar el empleado');

      return false;

    }
  };

  const onSubmit = (e) => {

    e.preventDefault();

    alertQuestion('Empleado: ', empleadoSeleccionado.nombre + " - " + "DNI: " + empleadoSeleccionado.dni, deleteAction);

  };

  return (
    <EliminarEmpleadoComponent onSubmit={onSubmit}>
      <h2 className="formTittle">Eliminar Empleado:</h2>
      <p className="formParagraph">Por favor elija un empleado a eliminar:</p>
      <div className="formContainer">
        <div className="formGroup">
          <select
            id="empleado"
            name="empleado"
            className="formInput"
            onChange={(e) => cargarEmpleado(e.target.value)}>
            <option value="">Seleccione un empleado:</option>
            {selectEmpleado.map((empleado) => (
              <option key={empleado.dni} value={empleado.dni}>
                {`${empleado.nombre} ${empleado.apellido} - DNI: ${empleado.dni}`}
              </option>
            ))}
          </select>
        </div>
        {empleadoSeleccionado && <MostrarEmpleado empleado={empleadoSeleccionado} />}
        <input type="submit" className="formSubmit" value="Eliminar Empleado" />
      </div>
    </EliminarEmpleadoComponent>
  );
};

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
    color: #333333;
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