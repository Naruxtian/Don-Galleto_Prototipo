import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Inicio = () => {
  return (
    <div class="container">
      <div class="row mx-auto text-center">
        <div class="col-2">
          <Link to={"/"}>
            <button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
            </svg></button>
          </Link>
        </div>
        <div class="col-10">
          <h1 class="fs-1">DON GALLETO: COCINA</h1>
        </div>
      </div>
      <br />
      <br />
      <div class="row mx-auto">
        <div class="col-4">
          <h2>ALMACEN</h2>
          <Link to={"/Cocina/Almacen"}>
            <button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg></button>
          </Link>
        </div>
        <div class="col-4">
          <h2>COCINAR</h2>
        <Link to={"/Cocina/Cocinar"}>
        <button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="150" height="150" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 13v.01"></path>
            <path d="M12 17v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M16 14v.01"></path>
            <path d="M11 8v.01"></path>
            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
          </svg></button>
        </Link>  
        </div>
        <div class="col-4">
          <h2>PROVISIONES</h2>
        <Link to={"/Cocina/Provisiones"}>
            <button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bus" width="150" height="150" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="17" r="2"></circle>
                <circle cx="18" cy="17" r="2"></circle>
                <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"></path>
                <polyline points="16 5 17.5 12 22 12"></polyline>
                <line x1="2" y1="10" x2="17" y2="10"></line>
                <line x1="7" y1="5" x2="7" y2="10"></line>
                <line x1="12" y1="5" x2="12" y2="10"></line>
              </svg></button>
        </Link>  
        </div>
      </div>
    </div>
  )
}

export default Inicio