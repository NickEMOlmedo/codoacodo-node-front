import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getData from '../../components/getData';
import alertError from '../../components/alertError';

const ListarAsignaciones = () => {
  const [listaAsignaciones, setListaAsignaciones] = useState([]);

  useEffect(() => {
    const fetchAsignaciones = async () => {
      const url_Asignaciones =
        'https://sistema-gestion-de-empleados-backend-2024.vercel.app/asignaciones';

      try {
        const response = await getData(url_Asignaciones);

        if (response && response.data && response.data.data) {
          setListaAsignaciones(response.data.data);
        } else {
          throw new Error('Formato de respuesta incorrecto');
        }
      } catch (error) {
        alertError('Error al cargar las asignaciones');
      }
    };

    fetchAsignaciones();
  }, []);

  const fetchEmpleado = async (id) => {

    const url_Empleado = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/${id}`;

    try {
      
      const response = await getData(url_Empleado);

      if (response && response.data && response.data.data.length > 0) {

        const empleado = {

          nombre: response.data.data[0].nombre,
          dni: response.data.data[0].dni,

        };
        return empleado;

      } else {

        throw new Error('Empleado no encontrado o respuesta vacía');
      }
    } catch (error) {

      alertError(error.message); 
    }
  };

  const fetchProyecto = async (id) => {
    const url_Proyecto = `https://sistema-gestion-de-empleados-backend-2024.vercel.app/proyectos/${id}`;

    try {
      const response = await getData(url_Proyecto);

      if (response && response.data && response.data.data.length > 0) {
        const proyecto = {
          nombre: response.data.data[0].nombre,
        };
        return proyecto;
      } else {
        throw new Error('Proyecto no encontrado o respuesta vacía');
      }
    } catch (error) {
      alertError(error.message); 
    }
  };

  const formatFechaAsignacion = (fecha) => {
    return new Date(fecha).toISOString().split('T')[0];
  };

  return (
    <AsignacionListContainer>
      <h2>Listado de Asignaciones:</h2>
      <ul>
        {listaAsignaciones.map((asignacion) => (
          <AsignacionItem key={asignacion.id}>
            <p>
              Empleado: {fetchEmpleado(asignacion.empleado_id)?.nombre || 'Cargando...'} DNI:{' '}
              {fetchEmpleado(asignacion.empleado_id)?.dni || 'Cargando...'}
            </p>
            <p>Proyecto: {fetchProyecto(asignacion.proyecto_id)?.nombre || 'Cargando...'}</p>
            <p>Fecha Asignacion: {formatFechaAsignacion(asignacion.fecha_asignacion)}</p>
            <p>Horas Trabajadas: {asignacion.horas_trabajadas}</p>
          </AsignacionItem>
        ))}
      </ul>
    </AsignacionListContainer>
  );
};
const AsignacionListContainer = styled.div`

  background-color: #f0f0f0;
  padding: 20px;
  border: solid 2px  #3866f2;
  border-radius: 8px;
  margin-top: 20px;
 
  h2 {

    font-size: 1.5rem;
    margin-bottom: 10px;

  }

  ul {

    list-style-type: none;
    padding: 0;
    margin: 0;

  }

`;

const AsignacionItem = styled.li`

  background-color: #ffffff;
  padding: 10px;
  border: solid 2px  #3866f2;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

  strong {

    font-size: 1.2rem;
    color: #333333;

  }

  p {
    margin: 5px 0;
    color: #333333;
  }
`;


export default ListarAsignaciones;