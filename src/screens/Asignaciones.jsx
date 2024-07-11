import styled from 'styled-components'
import Card from '../components/Card'
import iconoAgregar from '../assets/img/icono-añadirasignacion.png'
import iconoActualizar from '../assets/img/icono-actualizar.png'
import iconoBuscar from '../assets/img/icono-buscar.png'
import iconoEliminar from '../assets/img/icono-eliminarasignacion.png'
import iconoVolver from '../assets/img/icono-volver.png'

const Asignaciones = () => {
  return (
    <AsignacionesComponent>
    <CardContainer>
      <Card image={iconoAgregar} text="Añadir Asignaciones" link="/addasignacion" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoActualizar} text="Actualizar Asignaciones" link="" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoBuscar} text="Listar Asignaciones" link="/listasignaciones" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoEliminar} text="Eliminar Asignaciones" link="" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoVolver} text="Volver" link="/dashboard" />
    </CardContainer>
  </AsignacionesComponent>
  )
}

export default Asignaciones

const AsignacionesComponent = styled.div`

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