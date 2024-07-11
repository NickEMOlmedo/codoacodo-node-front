import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import getData from './getData'
import alertError from './alertError'

export const MostrarProyecto = ({ proyecto_id }) => {
    
    const [proyecto, setProyecto] = useState(null);

    useEffect(() => {
        const fetchProyectos = async () => {

            const url = `http://localhost:3000/proyectos/${proyecto_id}`;

            try {
                const response = await getData(url);

                if (response && response.data && response.data.data && response.data.data.length > 0) {
                    const proyecto = {
                        id: response.data.data[0].id,
                        nombre: response.data.data[0].nombre,
                        fecha_inicio: response.data.data[0].fecha_inicio,
                        presupuesto: response.data.data[0].presupuesto,
                    };

                    setProyecto(proyecto);

                } else {

                    alertError('No se encontraron datos válidos para el proyecto');
                }
            } catch (error) {

                alertError('Error al cargar el proyecto');
            }
        };

        fetchProyectos();

    }, [proyecto_id]);


    if (!proyecto) {
        return null;
    }


  const formatFechaInicio = (fecha) => {

    return new Date(fecha).toISOString().split('T')[0];

  };

    const { nombre, fecha_inicio, presupuesto } = proyecto;

    return (
        <MostrarProyectoComponent>
            <h2 className="tittle">Proyecto:</h2>
            <div>
                <h2>Información del Proyecto:</h2>
                <ul>
                    <li><strong>Nombre:{" "}</strong> {nombre}</li>
                    <li><strong>Fecha de Inicio:{" "}</strong> {formatFechaInicio(fecha_inicio)}</li>
                    <li><strong>Presupuesto:{" "}</strong> {presupuesto}</li>
                </ul>
            </div>
        </MostrarProyectoComponent>
    )    
};


MostrarProyecto.propTypes = {

    proyecto_id: PropTypes.number.isRequired,
    
    }


const MostrarProyectoComponent = styled.form`
    
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

export default MostrarProyecto;


