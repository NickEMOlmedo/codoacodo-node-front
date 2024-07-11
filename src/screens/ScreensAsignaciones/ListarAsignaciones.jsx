import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getData from '/src/components/getData.js'
import alertError from '../../components/alertError';

const ListarAsignaciones= () => {

    const [listaAsignaciones, setListaAsignaciones] = useState([]);

    //Fetch  para llenar el listado.

    useEffect(() => {
    
        const fetchAsignaciones =  async () => {
    
          const url_Asignaciones = 'http://localhost:3000/asignaciones';
    
          try {
            
            const response = await getData(url_Asignaciones);
    
            if (response && response.data && response.data.data) {

              setListaAsignaciones(response.data.data);

              console.log(response.data.data)
    
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

        const url_Empleado = `http://localhost:3000/empleados/${id}`

        try {
            
            const response = await getData(url_Empleado);
    
            if (response && response.data && response.data.data) {

                const empleado = {

                    nombre: response.data.data[0].nombre,
                    apellido: response.data.data[0].apellido,
                    dni: response.data.data[0].dni,
                    fecha_contratacion: response.data.data[0].fecha_contratacion,
                    salario: response.data.data[0].salario,
                    departamento_id: response.data.data[0].departamento_id,
                    pais: response.data.data[0].pais,
                    cargo: response.data.data[0].cargo
          
                  };

                  console.log(empleado)

                  return empleado;

    
            } else {
    
              throw new Error('Formato de respuesta incorrecto');
            }
          } catch (error) {
            
            alertError('Error al cargar el Proyecto');
    
          }
      }

      const fetchProyecto = async (id) => {

        const url_Proyecto = `http://localhost:3000/proyectos/${id}`

        try {
            
            const response = await getData(url_Proyecto);
    
            if (response && response.data && response.data.data) {

                const proyecto = {

                    id: response.data.data[0].id,
                    nombre: response.data.data[0].nombre,
                    fecha_inicio: response.data.data[0].fecha_inicio,
                    presupuesto: response.data.data[0].presupuesto,
          
                  };

                  console.log(proyecto)

             return proyecto;


            } else {
    
              throw new Error('Formato de respuesta incorrecto');
            }
          } catch (error) {
            
            alertError('Error al cargar el Proyecto');
    
          }
      }

      const formatFechaAsignacion = (fecha) => {

        return new Date(fecha).toISOString().split('T')[0];
    
      };
    
  return (

    <AsignacionListContainer>

      <h2>Listado de Asignaciones:</h2>
      <ul>
        {listaAsignaciones.map((asignacion) => (
          <AsignacionItem key={asignacion.id}>
            <p>Empleado:  {fetchEmpleado(asignacion.empleado_id).nombre} DNI:  { fetchEmpleado(asignacion.empleado_id).dni}</p>
            <p>Proyecto:  {fetchProyecto(asignacion.proyecto_id).nombre}</p>
            <p>Fecha Asignacion:  {formatFechaAsignacion(asignacion.fecha_asignacion)}</p>
            <p>Horas Trabajadas  {asignacion.horas_trabajadas}</p>
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