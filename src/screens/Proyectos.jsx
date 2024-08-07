import styled from 'styled-components'
import Card from '../components/Card'
import iconoAgregar from '../assets/img/icono-añadirasignacion.png'
import iconoActualizar from '../assets/img/icono-actualizar.png'
import iconoBuscar from '../assets/img/icono-buscar.png'
import iconoEliminar from '../assets/img/icono-eliminarasignacion.png'
import iconoVolver from '../assets/img/icono-volver.png'

const Proyectos = () => {
  return (
    <ProyectosComponent>
    <CardContainer>
      <Card image={iconoAgregar} text="Añadir Proyectos" link="/addproyecto" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoActualizar} text="Actualizar Proyecto" link="" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoBuscar} text="Listar Proyectos" link="/listproyectos" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoEliminar} text="Eliminar Proyectos" link="/deleteproyecto" />
    </CardContainer>
    <CardContainer>
      <Card image={iconoVolver} text="Volver" link="/dashboard" />
    </CardContainer>
  </ProyectosComponent>
  )
}

export default Proyectos

const ProyectosComponent = styled.div`

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