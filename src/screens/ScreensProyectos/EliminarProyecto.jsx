import styled from "styled-components";
import { useState, useEffect } from "react";
import alertError from "../../components/alertError";
import getData from "../../components/getData";
import MostrarProyecto from "../../components/MostrarProyectos";
import deleteForm from "../../components/deleteForm";
import alertQuestion from "../../components/alertQuestion";

const EliminarProyecto = () => {

  const [selectProyecto, setSelectProyecto] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  useEffect(() => {

    const fetchProyectos= async () => {

      const url = 'http://localhost:3000/proyectos/';

      try {
        
        const response = await getData(url);

        if (response && response.data && response.data.data) {

          setSelectProyecto(response.data.data);

        } else {

          alertError('Error al cargar los Proyectosa');
        }
      } catch (error) {

        alertError('Error al cargar los Proyectos');
      }
    };

    fetchProyectos();
  }, []);

  const cargarProyecto = async (id) => {

    const url = `http://localhost:3000/proyectos/${id}`;

    try {

      const response = await getData(url);

      if (response && response.data && response.data.data && response.data.data.length > 0) {

        const proyecto = {

          id: response.data.data[0].id,
          nombre: response.data.data[0].nombre,
          fecha_inicio: response.data.data[0].fecha_inicio,
          presupuesto: response.data.data[0].presupuesto,

        };

        setProyectoSeleccionado(proyecto);

      } else {

        setProyectoSeleccionado(null);

        console.log('No se encontraron datos válidos para el Proyecto');

      }

    } catch (error) {

      alertError('Error al cargar el proyecto');
    }
  };

  const deleteAction = async () => {

    if (!proyectoSeleccionado) return false;

    const id = proyectoSeleccionado.id;

    const url = `http://localhost:3000/proyectos/${id}`;

    try {

      const isTrue = await deleteForm(url);

      if (isTrue) {

        setProyectoSeleccionado(null);

      }

      return isTrue;

    } catch (error) {

      alertError('Error al eliminar el proyecto');

      return false;
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (proyectoSeleccionado) {

      alertQuestion(
        'Proyecto: ',
        `${proyectoSeleccionado.nombre} - ID: ${proyectoSeleccionado.id}`,
        deleteAction
      );
    }
  };

  return (
    <EliminarProyectoComponent onSubmit={handleSubmit}>
      <h2 className="formTittle">Eliminar Proyecto</h2>
      <p className="formParagraph">Por favor elija un proyecto a eliminar:</p>
      <div className="formContainer">
        <div className="formGroup">
          <select
            id="proyecto"
            name="proyecto"
            className="formInput"
            onChange={(e) => cargarProyecto(e.target.value)}>
            <option value="">Seleccione un proyecto:</option>
            {selectProyecto.map((proyecto) => (
              <option key={proyecto.id} value={proyecto.id}>
                {`${proyecto.nombre}`}
              </option>
            ))}
          </select>
        </div>
        {proyectoSeleccionado && <MostrarProyecto proyecto_id={proyectoSeleccionado.id} />}
        <input type="submit" className="formSubmit" value="Eliminar Proyecto" />
      </div>
    </EliminarProyectoComponent>
  );
};

const EliminarProyectoComponent = styled.form`

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





export default EliminarProyecto;
