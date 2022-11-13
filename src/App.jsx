import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Components/Inicio'
import Cocina from './Components/Cocina/Cocina_Inicio'
import Venta from './Components/Venta/Ventas_Inicio'
import Almacen from './Components/Cocina/Almacen_Cocina'
import Cocinar from './Components/Cocina/Cocinar_Cocina'
import Provisiones from './Components/Cocina/Provisiones_Cocina'
import GalletaSeleccion from './Components/Cocina/GalletaSeleccion_Cocina'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Cocina" element={<Cocina />}></Route>
        <Route path="/Venta" element={<Venta />}></Route>
        <Route path="/Almacen" element={<Almacen />}></Route>
        <Route path="/Cocinar" element={<Cocinar />}></Route>
        <Route path="/Provisiones" element={<Provisiones />}></Route>
        <Route path="/GalletaSeleccion" element={<GalletaSeleccion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
