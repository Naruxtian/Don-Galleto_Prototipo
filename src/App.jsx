import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Components/Inicio'
import Cocina from './Components/Cocina/Cocina_Inicio'
import Venta from './Components/Venta/Ventas_Inicio'
import Almacen from './Components/Cocina/Almacen_Cocina'
import Cocinar from './Components/Cocina/Cocinar_Cocina'
import Provisiones from './Components/Cocina/Provisiones_Cocina'
import GalletaSeleccion from './Components/Cocina/GalletaSeleccion_Cocina'
import Inventario from './Components/Venta/Ventas_Inventario'
import Ventas from './Components/Venta/Ventas_Venta'
import Estadisticas from './Components/Venta/Ventas_Estadisticas'

function App() {

  return (
    <div className="App" style={{height:'90vh'}}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Cocina" element={<Cocina />}></Route>
        <Route path="/Venta" element={<Venta />}></Route>
        <Route path="/Cocina/Almacen" element={<Almacen />}></Route>
        <Route path="/Cocina/Cocinar" element={<Cocinar />}></Route>
        <Route path="/Cocina/Provisiones" element={<Provisiones />}></Route>
        <Route path="/Cocina/GalletaSeleccion" element={<GalletaSeleccion />}></Route>
        <Route path="/Venta/Inventario" element={<Inventario />}></Route>
        <Route path="/Venta/Ventas" element={<Ventas />}></Route>
        <Route path="/Venta/Estadisticas" element={<Estadisticas />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
