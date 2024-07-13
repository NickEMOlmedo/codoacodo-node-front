import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getData from '/src/components/getData.js'
import alertError from '../../components/alertError';

const ListarDepartamentos = () => {

    const [listaDepartamentos, setListaDepartamentos] = useState([]);

    //Fetch  para llenar el listado.

    useEffect(() => {
    
        const fetchDepartamentos=  async () => {
    
          const url_Departamentos = 'https://sistema-gestion-de-empleados-backend-2024.vercel.app/departamentos';
    
          try {
            
            const response = await getData(url_Departamentos);
    
            if (response && response.data && response.data.data) {

              setListaDepartamentos(response.data.data);
    
            } else {
    
              throw new Error('Formato de respuesta incorrecto');
            }
          } catch (error) {
            
            alertError('Error al cargar lost empleados');
    
          }
        };
    
        fetchDepartamentos();
    
      }, []);
    
  return (

    <DepartamentoListContainer>

      <h2>Listado de Departamentos:</h2>
      <ul>
        {listaDepartamentos.map((departamento) => (
          <DepartamentoItem key={departamento.id}>
            <strong>{departamento.nombre}</strong>
            <p>Ubicacion: {departamento.ubicacion}</p>
            {}
          </DepartamentoItem>
        ))}
      </ul>

    </DepartamentoListContainer>
  );
};

const DepartamentoListContainer = styled.div`

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

const DepartamentoItem = styled.li`

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

export default ListarDepartamentos;