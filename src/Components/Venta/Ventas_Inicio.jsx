import React from 'react'
import '../../App.css'

const Inicio = () => {
  return (
    <div class="container">
        <div class="row mx-auto text-center">
            <h1 class="fs-1">DON GALLETO: PUNTO DE VENTA</h1>
        </div>
        <br/>
        <br/>
        <div class="row mx-auto">
            <div class="col-4">
              <h2>INVENTARIO</h2>
              <button class='botonSeccion'>(ICONO)</button>
            </div>
            <div class="col-4">
              <h2>VENDER</h2>
              <button class='botonSeccion'>(ICONO)</button>
            </div>
            <div class="col-4">
              <h2>ESTADISTICAS</h2>
              <button class='botonSeccion'>(ICONO)</button>
            </div>
        </div>
    </div>
  )
}

export default Inicio