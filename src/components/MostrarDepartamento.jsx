import styled from 'styled-components'
import PropTypes from 'prop-types'


export const MostrarDepartamento = (departamento) => {

    const {nombre, ubicacion} = departamento;

    return (
        <MostrarDepartamentoComponent>
            <h2 className="tittle">Departamento:</h2>
            <div>
                <h2>Información del Departamento:</h2>
                <ul>
                    <li><strong>Nombre:{" "}</strong> {nombre}</li>
                    <li><strong>Ubicacion:{" "}</strong> {ubicacion}</li>
                </ul>
            </div>
        </MostrarDepartamentoComponent>
    )
}

MostrarDepartamento.propTypes = {


    departamento: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        ubicacion: PropTypes.string.isRequired,

    })

}

const MostrarDepartamentoComponent = styled.form`
    
      background-color: #ffffff;
      width: 90%;
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


