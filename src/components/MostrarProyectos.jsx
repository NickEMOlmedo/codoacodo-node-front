import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import alertError from '/src/components/alertError';
import getData from '/src/components/getData';


const MostrarProyecto = ({ proyecto_id }) => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  useEffect(() => {
    const cargarProyecto = async (id) => {
      const url = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/proyectos/${id}`;

      try {
        const response = await getData(url);

        if (response && response.data && response.data.data.length > 0) {
          const proyecto = {
            id: response.data.data[0].id,
            nombre: response.data.data[0].nombre,
            fecha_inicio: response.data.data[0].fecha_inicio,
            presupuesto: response.data.data[0].presupuesto,
          };

          setProyectoSeleccionado(proyecto);
        } else {
          setProyectoSeleccionado(null);
          console.log('No se encontraron datos válidos para el proyecto');
        }
      } catch (error) {
        alertError(error);
      }
    };

    cargarProyecto(proyecto_id);
  }, [proyecto_id]);

  const formatFechaInicio = (fecha) => {
    return new Date(fecha).toISOString().split('T')[0];
  };

  return (
    <MostrarProyectoComponent>
      <h2 className="title">Proyecto:</h2>
      {proyectoSeleccionado ? (
        <div>
          <h2>Información del Proyecto:</h2>
          <ul>
            <li>
              <strong>Nombre:</strong> {proyectoSeleccionado.nombre}
            </li>
            <li>
              <strong>Fecha de Inicio:</strong>{' '}
              {formatFechaInicio(proyectoSeleccionado.fecha_inicio)}
            </li>
            <li>
              <strong>Presupuesto:</strong> {proyectoSeleccionado.presupuesto}
            </li>
          </ul>
        </div>
      ) : (
        <p>No se encontraron datos para el proyecto seleccionado.</p>
      )}
    </MostrarProyectoComponent>
  );
};

MostrarProyecto.propTypes = {
  proyecto_id: PropTypes.string.isRequired,
};

const MostrarProyectoComponent = styled.div`

  background-color: #ffffff;
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  padding: 3rem;
  border-radius: 10px;
  border: solid 3px #5757577e;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

  .title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    .title {
      font-size: 1.8rem;
    }
  }
`;

export default MostrarProyecto;
