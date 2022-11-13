import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const InicioVentas = () => {
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
                    <h1 class="fs-1">Estadisticas: 07/11/22(Funcion)</h1>
                </div>
            </div>
            <br />
            <h3>Ganancias del dia: $7000(Funcion)</h3>
            <br />
            <div class="row mx-auto">
                <table class="table table-striped table-bordered table-light">
                    <thead>
                        <tr>
                            <th scope="col">Galleta</th>
                            <th scope="col">Cocinadas</th>
                            <th scope="col">Vendidas</th>
                            <th scope="col">Mermadas</th>
                            <th scope="col">Ventas ($)</th>
                            <th scope="col">Insumos ($)</th>
                            <th scope="col">Utilidad ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Canela</td>
                            <td>800</td>
                            <td>300</td>
                            <td>0</td>
                            <td>1500</td>
                            <td>500</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Mantequilla</td>
                            <td>500</td>
                            <td>100</td>
                            <td>10</td>
                            <td>500</td>
                            <td>170</td>
                            <td>280</td>
                        </tr>
                        <tr>
                            <td>Chocolate</td>
                            <td>***</td>
                            <td>***</td>
                            <td>***</td>
                            <td>***</td>
                            <td>***</td>
                            <td>***</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InicioVentas