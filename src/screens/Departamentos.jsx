import styled from 'styled-components'
import Card from '../components/Card'
import iconoAgregar from '../assets/img/icono-añadir.png'
import iconoActualizar from '../assets/img/icono-actualizar.png'
import iconoBuscar from '../assets/img/icono-buscar.png'
import iconoEliminar from '../assets/img/icono-eliminar.png'
import iconoVolver from '../assets/img/icono-volver.png'
 

const Departamentos = () => {
  return (
    <DepartamentosComponent>
      <CardContainer>
        <Card image={iconoAgregar} text="Añadir Departamentos" link="" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoActualizar} text="Actualizar Departamentos" link="" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoBuscar} text="Buscar Departamentos" link="" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoEliminar} text="Eliminar Departamentos" link="" />
      </CardContainer>
      <CardContainer>
        <Card image={iconoVolver} text="Volver" link="" />
      </CardContainer>
    </DepartamentosComponent>
  )
}

export default Departamentos;

const DepartamentosComponent = styled.div`

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