import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import getData from './getData'
import alertError from './alertError'

export const MostrarDepartamento = ({ departamento_id }) => {
    
    const [departamento, setDepartamento] = useState(null);

    useEffect(() => {
        const fetchDepartamento = async () => {

            const url = `http://localhost:3000/departamentos/${departamento_id}`;

            try {
                const response = await getData(url);

                if (response && response.data && response.data.data && response.data.data.length > 0) {
                    const departamento = {
                        id: response.data.data[0].id,
                        nombre: response.data.data[0].nombre,
                        ubicacion: response.data.data[0].ubicacion,
                    };

                    setDepartamento(departamento);

                } else {

                    alertError('No se encontraron datos válidos para el departamento');
                }
            } catch (error) {

                alertError('Error al cargar el departamento');
            }
        };

        fetchDepartamento();
    }, [departamento_id]);

    if (!departamento) {
        return null;
    }

    const { nombre, ubicacion } = departamento;

    return (
        <MostrarDepartamentoComponent>
            <h2 className="tittle">Departamento:</h2>
            <div>
                <h2>Información del Departamento:</h2>
                <ul>
                    <li><strong>Nombre:{" "}</strong> {nombre}</li>
                    <li><strong>Ubicación:{" "}</strong> {ubicacion}</li>
                </ul>
            </div>
        </MostrarDepartamentoComponent>
    )
}

MostrarDepartamento.propTypes = {

    departamento_id: PropTypes.number.isRequired,
}

const MostrarDepartamentoComponent = styled.form`
    
      background-color: #ffffff;
      width: 100%;
      margin: 0 auto;
      max-width: 400px;
      text-align: center;
      padding: 3rem;
      border-radius: 10px;
      border: solid 3px #5757577e;
      box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);
    
      .tittle {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      text-decoration: underline;
    }
    
    
    @media (max-width: 768px) {
    
    margin-bottom: 2rem;
    
      .tittle {
        font-size: 1.8rem;
      }
    }
    
    `;

export default MostrarDepartamento


