import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import iconoAsignacion from '../assets/img/icono-asignacion.png'
import iconoDepartamento from '../assets/img/icono-departamento.png'
import iconoEmpleado from '../assets/img/icono-empleado.png'
import iconoProyecto from '../assets/img/icono-proyecto.png'
import iconoVolver from '../assets/img/icono-volver.png'


export const Home = () => {
    return (
        <HomeScreen>
            <CardContainer>
                <Card image={iconoEmpleado} text="Empleados" link="" />
            </CardContainer>
            <CardContainer>
                <Card image={iconoEmpleado} text="Empleados" link="" />
            </CardContainer>
            <CardContainer>
                <Card image={iconoDepartamento} text="Departamentos" link="" />
            </CardContainer>
            <CardContainer>
                <Card image={iconoProyecto} text="Proyectos" link="" />
            </CardContainer>
            <CardContainer>
                <Card image={iconoAsignacion} text="Asignaciones" link="" />
            </CardContainer>
            <CardContainer>
                <Card image={iconoVolver} text="Volver" link="" />
            </CardContainer>

        </HomeScreen>
    )
}

const HomeScreen = styled.div`

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