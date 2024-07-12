import styled from "styled-components";
import { useState, useEffect } from "react";
import alertError from "../../components/alertError";
import getData from "../../components/getData";
import MostrarDepartamento from "../../components/MostrarDepartamento";
import deleteForm from "../../components/deleteForm";
import alertQuestion from "../../components/alertQuestion";

const EliminarDepartamento = () => {

  const [selectDepartamento, setSelectDepartamento] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

  //Fetch para Setear las listas de seleccion.

  useEffect(() => {

    const fetchDepartamentos = async () => {

      const url = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos/';

      try {
        
        const response = await getData(url);

        if (response && response.data && response.data.data) {

          setSelectDepartamento(response.data.data);

        } else {

          alertError('Error al cargar los departamentos');
        }
      } catch (error) {

        alertError('Error al cargar los departamentos');
      }
    };

    fetchDepartamentos();
  }, []);

  const cargarDepartamento = async (id) => {

    const url = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos/${id}`;

    try {

      const response = await getData(url);

      if (response && response.data && response.data.data && response.data.data.length > 0) {

        const departamento = {

          id: response.data.data[0].id,
          nombre: response.data.data[0].nombre,
          ubicacion: response.data.data[0].ubicacion,

        };

        setDepartamentoSeleccionado(departamento);

      } else {

        setDepartamentoSeleccionado(null);

        console.log('No se encontraron datos válidos para el departamento');

      }

    } catch (error) {

      alertError('Error al cargar el departamento');
    }
  };

  const deleteAction = async () => {

    if (!departamentoSeleccionado) return false;

    const id = departamentoSeleccionado.id;

    const url = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos/${id}`;

    try {

      const isTrue = await deleteForm(url);

      if (isTrue) {

        setDepartamentoSeleccionado(null);

      }

      return isTrue;

    } catch (error) {

      alertError('Error al eliminar el departamento');

      return false;
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (departamentoSeleccionado) {

      alertQuestion(
        'Departamento: ',
        `${departamentoSeleccionado.nombre} - ID: ${departamentoSeleccionado.id}`,
        deleteAction
      );
    }
  };

  return (
    <EliminarDepartamentoComponent onSubmit={handleSubmit}>
      <h2 className="formTittle">Eliminar Departamento</h2>
      <p className="formParagraph">Por favor elija un departamento a eliminar:</p>
      <div className="formContainer">
        <div className="formGroup">
          <select
            id="departamento"
            name="departamento"
            className="formInput"
            onChange={(e) => cargarDepartamento(e.target.value)}>
            <option value="">Seleccione un departamento:</option>
            {selectDepartamento.map((departamento) => (
              <option key={departamento.id} value={departamento.id}>
                {`${departamento.nombre}`}
              </option>
            ))}
          </select>
        </div>
        {departamentoSeleccionado && <MostrarDepartamento departamento_id={departamentoSeleccionado.id} />}
        <input type="submit" className="formSubmit" value="Eliminar Departamento" />
      </div>
    </EliminarDepartamentoComponent>
  );
};

const EliminarDepartamentoComponent = styled.form`
  background-color: #ffffff;
  width: 100%;
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
  
  .formLabel {
    color: #333333;
    cursor: pointer;
    transform: translateY(10px);
    transition: transform 0.5s, color 0.3s;
  }
  
  @media (max-width: 768px) {
    .formTittle {
      font-size: 1.8rem;
    }
  }
`;





export default EliminarDepartamento;
