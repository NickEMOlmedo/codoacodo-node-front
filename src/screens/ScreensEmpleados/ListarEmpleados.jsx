import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getData from '/src/components/getData.js'
import alertError from '../../components/alertError';
import moment from 'moment';

const ListarEmpleados = () => {

  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [listaDepartamentos, setListaDepartamentos] = useState([]);

  useEffect(() => {

    const fetchEmpleados = async () => {

      const url_Empleados = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/empleados/';

      try {

        const response = await getData(url_Empleados);

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

  useEffect(() => {

    const fetchDepartamentos = async () => {

      const url_Departamentos = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos';

      try {

        const response = await getData(url_Departamentos);

        if (response && response.data && response.data.data) {

          setListaDepartamentos(response.data.data);

        } else {

          throw new Error('Formato de respuesta incorrecto');
        }
      } catch (error) {

        alertError('Error al cargar departamentos');

      }
    };

    fetchDepartamentos();

  }, []);

  const obtenerNombreDepartamento = (departamentoId) => {
    const departamentoEncontrado = listaDepartamentos.find(departamento => departamento.id === departamentoId);
    return departamentoEncontrado ? departamentoEncontrado.nombre : 'Departamento no encontrado';
  };

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
            <p>Departamento: {obtenerNombreDepartamento(empleado.departamento_id)}</p>
            <p>Cargo: {empleado.cargo}</p>
            <p>Salaio: {empleado.salario}</p>
            { }
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
