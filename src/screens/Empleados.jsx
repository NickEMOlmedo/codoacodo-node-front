import styled from 'styled-components'
import Card from '../components/Card'
import iconoAgregar from '../assets/img/icono-agregarempleado.png'
import iconoEliminar from '../assets/img/icono-eliminarempleado.png'
import iconoActualizar from '../assets/img/icono-actualizar.png'
import iconoBuscar from '../assets/img/icono-buscarempleado.png'
import iconoVolver from '../assets/img/icono-volver.png'


const Empleados = () => {
  return (
    <EmpleadosComponent>
      <CardContainer>
        <Card image={iconoAgregar} text="Añadir Empleados" link="/addempleado" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoActualizar} text="Actualizar Empleados" link="/updateempleado" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoBuscar} text="Listar Empleados" link="/listempleados" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoEliminar} text="Eliminar Empleados" link="/deleteempleado" />
      </CardContainer>      
      <CardContainer>
        <Card image={iconoVolver} text="Volver" link="/dashboard" />
      </CardContainer>
    </EmpleadosComponent>
  )
}

export default Empleados;

const EmpleadosComponent = styled.div`

display: grid;
margin: 2rem 0 2rem 0;
grid-auto-rows: 12rem;
grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
gap: 1rem;
`;

const CardContainer = styled.div`

&:hover{

transition: transform 0.3s ease, color 0.3s ease;
transform: scale(1.1);
}

`;