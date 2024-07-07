import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getEmpleados from '/src/components/getEmpleados'
import alertError from '../../components/alertError';
import moment from 'moment';

const ListarEmpleados = () => {

    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
    
        const fetchEmpleados= async () => {
    
          const url_Empleados = 'http://localhost:3000/empleados';
    
          try {
            
            const response = await getEmpleados(url_Empleados);
    
            if (response && response.data && response.data.data) {
    
              setListaEmpleados(response.data.data);
    
            } else {
    
              throw new Error('Formato de respuesta incorrecto');
            }
          } catch (error) {
            
            alertError('Error al cargar lost empleados');
    
          }
        };
    
        fetchEmpleados();
    
      }, []);
    

  return (

    <EmpleadoListContainer>

      <h2>Listado de Empleados:</h2>
      <ul>
        {listaEmpleados.map((empleado) => (
          <EmpleadoItem key={empleado.id}>
            <strong>{empleado.nombre} {empleado.apellido}</strong>
            <p>DNI: {empleado.dni}</p>
            <p>Pais: {empleado.pais}</p>
            <p>Fecha de Contratacion: {moment(empleado.fecha_contratacion).format('YYYY-MM-DD')}</p>
            <p>Departamento: {empleado.departamento}</p>
            <p>Cargo: {empleado.cargo}</p>
            <p>Salaio: {empleado.salario}</p>
            {}
          </EmpleadoItem>
        ))}
      </ul>

    </EmpleadoListContainer>
  );
};

const EmpleadoListContainer = styled.div`

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

const EmpleadoItem = styled.li`

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

export default ListarEmpleados;
