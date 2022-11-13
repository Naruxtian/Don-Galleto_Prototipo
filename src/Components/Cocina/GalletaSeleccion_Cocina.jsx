import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Inicio = () => {
    return (
        <div class="container">
            <div class="row mx-auto text-center">
                <div class="col-2">
                    <Link to={"/Cocina/Cocinar"}>
                        <button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                        </svg></button>
                    </Link>
                </div>
                <div class="col-10">
                    <h1 class="fs-1">GALLETA SELECCIONADA</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <div>
                    <label class="fs-3">Lotes:</label>
                    <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg></button>
                    <input type="number" class="inputTamaño" />
                    <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg></button>
                </div> <br /> <br />
                <div class="col-12">
                    <div class="col-6 divTamaño">
                        <h3 class="fs-1">Ingredientes:</h3>
                        <div class="col-6">
                            <label htmlFor="">1 Kg de harina</label>
                        </div>
                        <div class="col-6">
                            <label htmlFor="">25 L de aceite</label>
                        </div>
                        <div class="col-6">
                            <label htmlFor="">5 Kg de chocolate</label>
                        </div>
                    </div>
                    <div class="col-6 divTamaño">
                        <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                            <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                            <path d="M9 8h6"></path>
                        </svg>Receta</button> <br /> <br />
                        <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 13v.01"></path>
                            <path d="M12 17v.01"></path>
                            <path d="M12 12v.01"></path>
                            <path d="M16 14v.01"></path>
                            <path d="M11 8v.01"></path>
                            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                        </svg>Cocinar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio