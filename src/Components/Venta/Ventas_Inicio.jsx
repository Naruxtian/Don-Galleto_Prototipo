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
        <Link to={"/Venta/Inventario"}><button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16">
        <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
      </svg></button></Link>
        </div>
        <div class="col-4">
          <h2>VENDER</h2>
          <Link to={"/Venta/Ventas"}><button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
          <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
        </svg></button></Link>
        </div>
        <div class="col-4">
          <h2>ESTADISTICAS</h2>
          <Link to={"/Venta/Estadisticas"}><button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
        </svg></button></Link>
        </div>
      </div>
    </div>
  )
}

export default InicioVentas