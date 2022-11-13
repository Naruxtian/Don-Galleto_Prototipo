import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Inventario = () => {
const [merma, setMerma] = React.useState(true);

    return (
        <div class="container">
            <div class="row mx-auto">
                <div class="col-2">
                    <Link to={"/Venta"}><button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none">
                        </path><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                    </svg></button></Link>
                </div>
                <div class="col-8">
                    <h1 class="fs-1">INVENTARIO DE GALLETAS</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row">
                <div class="row mx-auto">
                    <div class="col-2">
                        <button class='botonSeccion2'>Canela<br />(GALLETA)<br />300</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Mantequilla<br />(GALLETA)<br />350</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Chocolate<br />(GALLETA)<br />50</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Pasas y avena<br />(GALLETA)<br />400</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Rellenas de naranja<br />(GALLETA)<br />200</button>
                    </div>
                </div>
                <div class="row mx-auto">
                    <div class="col-2">
                        <button class='botonSeccion2'>Integral<br />(GALLETA)<br />150</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Mantequilla con fresas<br />(GALLETA)<br />100</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Chocolate con nueces<br />(GALLETA)<br />85</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Chocolate sin gluten<br />(GALLETA)<br />250</button>
                    </div>
                    <div class="col-2">
                        <button class='botonSeccion2'>Rellenas de natilla<br />(GALLETA)<br />125</button>
                    </div>
                    <div class="col-12 merma">
                        <button class='botonMermar'>Mermar(GALLETA)</button>
                    </div>
                </div>
                {
                    merma ? (
                        <div class="row mx-auto">
                        </div>
                    ) : (   
                        <div class="row mx-auto">
                    </ div>
                    )
                }

            </div>

        </div>
    )
}

export default Inventario