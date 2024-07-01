import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './screens/Layout'


function App() {

  return <div>

<BrowserRouter>

<Routes>

<Route path="/" element={<Layout/>}/>



</Routes>





</BrowserRouter>


  </div>

}

export default App;


