import "./App.css";
import NavBar from './components/Navbar'
import { Home } from "./screens/Home";




function App() {

  return <div>

    <NavBar/>
    <Home/>
  

  </div>

}

export default App;




{
  /*
     <Router>

      <Routes>
  

        <Route path="./screens/Login.jsx" element={<login/>} />
        <Route path="./screens/Empleados.jsx" element={<empleados />} />
        <Route path="./screens/Asignaciones.jsx" element={<asignaciones />} />
        <Route path="./screens/EmpleadoForm.jsx" element={<empleadoForm />} />
        <Route path="./screens/Departamentos.jsx" element={<departamentos />} />

      </Routes>

    </Router>
*/}