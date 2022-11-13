import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const InicioVentas = () => {
  return (
    <div class="container">
      <div class="row mx-auto">
                <div class="col-2">
                    <Link to={"/"}><button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none">
                        </path><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                    </svg></button></Link>
                </div>
                <div class="col-8">
                    <h1 class="fs-1">DON GALLETO: PUNTO DE VENTA</h1>
                </div>
            </div>
      <br />
      <br />
      <div class="row mx-auto">
        <div class="col-4">
          <h2>INVENTARIO</h2>
          <Link to={"/Venta/Inventario"}><button class='botonSeccion'>(ICONO)</button></Link>
        </div>
        <div class="col-4">
          <h2>VENDER</h2>
          <Link to={"/Venta/Ventas"}><button class='botonSeccion'>(ICONO)</button></Link>
        </div>
        <div class="col-4">
          <h2>ESTADISTICAS</h2>
          <Link to={"/Venta/Estadisticas"}><button class='botonSeccion'>(ICONO)</button></Link>
        </div>
      </div>
    </div>
  )
}

export default InicioVentas