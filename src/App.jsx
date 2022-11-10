import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Components/Inicio'
import Cocina from './Components/Cocina/Cocina_Inicio'
import Venta from './Components/Venta/Ventas_Inicio'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Cocina" element={<Cocina />}></Route>
        <Route path="/Venta" element={<Venta />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
