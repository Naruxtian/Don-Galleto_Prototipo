import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Ventas = () => {
    return (
        <div class="container">
            <div class="row mx-auto">
                <div class="col-1">
                    <Link to={"/Venta"}><button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none">
                        </path><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                    </svg></button></Link>
                </div>
                <div class="col-8">
                    <h1 class="fs-1">VENTA</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <div class="col-2">
                    <button class='botonSeccion2'>Canela<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Rellenas de naranja<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Mantequilla con fresa<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate sin gluten<br />(GALLETA)</button>
                </div>
                <div class="col-2">
                    <button class='botonSeccion2'>Mantequilla<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Pasas y avena<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Integral<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate con nueces<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Rellens de natilla<br />(GALLETA)</button>
                </div>
                <div class="col-4">
                    <h2>Chocolate</h2>
                    <button class='botonSeccion'>(GALLETA)</button><br />
                    <div class="row">
                        <div class="row mx-auto">
                            <div class="col-7">
                                <button class='botonOpcion'>Cant/dinero</button>
                            </div>
                            <div class="col-2">
                                <button class='botonOpcion'>Piezas</button>
                            </div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-7">
                                <button class='botonOpcion'>Peso</button>
                            </div>
                            <div class="col-2">
                                <button class='botonOpcion'>Paquetes</button>
                            </div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-7">
                                <h3>$_____</h3>
                            </div>
                            <div class="col-2">
                                <button class='botonOpcion'>Agregar (ICONO)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-auto carrito">
                <div class="col-10 carrito">
                    <h2>Carrito (ICONO)</h2>
                </div>
            </div>
        </div>
    )
}

export default Ventas