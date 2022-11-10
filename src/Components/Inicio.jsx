import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

const Inicio = () => {
  return (
    <div class="container">
        <div class="row mx-auto text-center">
            <h1 class="fs-1">DON GALLETO</h1>
        </div>
        <br/>
        <br/>
        <div class="row mx-auto">
            <div class="col-6">
              <h2>PUNTO DE VENTA</h2>
             <Link to={"/Venta"}><button class='botonSeccion'>(ICONO)</button></Link>
            </div>
            <div class="col-6">
              <h2>COCINA</h2>
              <Link to={"/Cocina"}><button class='botonSeccion'>(ICONO)</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Inicio