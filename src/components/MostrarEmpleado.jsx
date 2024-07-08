
import styled from 'styled-components'
import PropTypes from 'prop-types'


const MostrarEmpleado = ({empleado}) => {

  
    const {nombre,apellido,dni,fecha_contratacion,salario,departamento_id,pais,cargo} = empleado;

    return (

        <MostrarEmpleadoComponent>
                <h2 className="tittle">Empleado:</h2>
                        <div>
                            <h2>Información del Empleado</h2>
                            <ul>
                                <li><strong>Nombre:{" "}</strong> {nombre}</li>
                                <li><strong>Apellido:{" "}</strong> {apellido}</li>
                                <li><strong>DNI:{" "}</strong> {dni}</li>
                                <li><strong>Fecha de Contratacion:{" "}</strong> {fecha_contratacion}</li>
                                <li><strong>Salario:{" "}</strong>{salario}</li>
                                <li><strong>Departamento:{" "}</strong>{departamento_id}</li>
                                <li><strong>Pais:{" "}</strong>{pais}</li>
                                <li><strong>Cargo:{" "}</strong>{cargo}</li>
                            </ul>
                        </div>
        </MostrarEmpleadoComponent>
    )
}

MostrarEmpleado.propTypes = {

empleado : PropTypes.shape({
nombre: PropTypes.string.isRequired,
apellido: PropTypes.string.isRequired,
dni: PropTypes.string.isRequired,
fecha_contratacion: PropTypes.string.isRequired,
salario: PropTypes.string.isRequired,
departamento_id: PropTypes.number.isRequired,
pais: PropTypes.string.isRequired,
cargo: PropTypes.string.isRequired,

})

}

const MostrarEmpleadoComponent = styled.form`

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

export default MostrarEmpleado

