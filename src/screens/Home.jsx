import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import iconoAsignacion from '../assets/img/icono-asignacion.png'
import iconoDepartamento from '../assets/img/icono-departamento.png'
import iconoEmpleado from '../assets/img/icono-empleado.png'
import iconoProyecto from '../assets/img/icono-proyecto.png'


export const Home = () => {
  return (
    <HomeScreen>

<Card image={iconoEmpleado} text="Empleados" link=""/>
<Card image={iconoDepartamento} text="Departamentos" link=""/>
<Card image={iconoProyecto} text="Proyectos" link=""/>
<Card image={iconoAsignacion} text="Asignaciones" link=""/>

        
    </HomeScreen>
  )
}

const HomeScreen = styled.div`

display: grid;
gap: 1rem;
margin-bottom: 2rem;

`;