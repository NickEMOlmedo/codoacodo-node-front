import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getData from '/src/components/getData.js'
import alertError from '../../components/alertError';

const ListarProyectos = () => {

    const [ListaProyectos, setListaProyectos] = useState([]);

    useEffect(() => {
    
        const fetchDepartamentos=  async () => {
    
          const url_Proyectos = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/proyectos/';
    
          try {
            
            const response = await getData(url_Proyectos);
    
            if (response && response.data && response.data.data) {

              setListaProyectos(response.data.data);
    
            } else {
    
              throw new Error('Formato de respuesta incorrecto');
            }
          } catch (error) {
            
            alertError('Error al cargar lost empleados');
    
          }
        };
    
        fetchDepartamentos();
    
      }, []);

      const formatFechaInicio = (fecha) => {

        return new Date(fecha).toISOString().split('T')[0];
    
      };
    
    
  return (

    <ProyectoListContainer>

      <h2>Listado de Proyectos:</h2>
      <ul>
        {ListaProyectos.map((proyecto) => (
          <ProyectoItem key={proyecto.id}>
            <strong>{proyecto.nombre}</strong>
            <p>Fecha de incio: {formatFechaInicio(proyecto.fecha_inicio)}</p>
            <p>Presupuesto: {proyecto.presupuesto}</p>
            {}
          </ProyectoItem>
        ))}
      </ul>

    </ProyectoListContainer>
  );
};

const ProyectoListContainer = styled.div`

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

const ProyectoItem = styled.li`

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


export default ListarProyectos;