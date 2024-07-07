import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../screens/Dashboard"
import Home from "../screens/Home"
import Empleados from "../screens/Empleados"
import Departamentos from "../screens/Departamentos"
import Proyectos from "../screens/Proyectos"
import Asignaciones from "../screens/Asignaciones"
import AgregarEmpleado from "../screens/ScreensEmpleados/AgregarEmpleado"
import ActualizarEmpleado from "../screens/ScreensEmpleados/ActualizarEmpleado"
import EliminarEmpleado from "../screens/ScreensEmpleados/EliminarEmpleado"
import AgregarDepartamento from "../screens/ScreensDepartamentos/AgregarDepartamento"
import EliminarDepartamento from "../screens/ScreensDepartamentos/EliminarDepartamento"
import ActualizarDepartamento from "../screens/ScreensDepartamentos/ActualizarDepartamento"
import AgregarAsignacion from "../screens/ScreensAsignaciones/AgregarAsignacion"
import AgregarProyecto from "../screens/ScreensProyectos/AgregarProyecto"
import ListarEmpleados from "../screens/ScreensEmpleados/ListarEmpleados"

export const Routers = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<Dashboard />}>

                <Route path="/empleados" element={<Empleados />} />
                <Route path="/departamentos" element={<Departamentos />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/asignaciones" element={<Asignaciones />} />
                <Route path="/addempleado" element={<AgregarEmpleado />} />
                <Route path="/updateempleado" element={<ActualizarEmpleado />} />
                <Route path="/deleteempleado" element={<EliminarEmpleado />} />
                <Route path="/listempleados" element={<ListarEmpleados/>} />
                <Route path="/adddepartamento" element={<AgregarDepartamento />} />
                <Route path="/deletedepartamento" element={<EliminarDepartamento />} />
                <Route path="/updatedepartamento" element={<ActualizarDepartamento/>} />
                <Route path="/addasignacion" element={<AgregarAsignacion/>} />
                <Route path="/addproyecto" element={<AgregarProyecto/>} />
                
            </Route>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    )
}
