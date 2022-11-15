import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const InicioVentas = () => {
    const [galletas, setGalletas] = React.useState([]);
    const [utilidad, setUtilidad] = React.useState(0);
    const [date, setDate] = React.useState(new Date());

    const obtenerGalletas =  () => {
        let gall= []
        gall = JSON.parse(localStorage.getItem('galletas'))
        setGalletas(gall)
    }

    React.useEffect(() => {
        obtenerGalletas()
    }, [])

    return (
        <div class="container">
            <div class="row mx-auto">
                <div class="col-1">
                    <Link to={"/Venta"}><button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none">
                        </path><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                    </svg></button></Link>
                </div>
                <div class="col-10">
                    <h1 class="fs-1">Estadisticas: {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} </h1>
                </div>
            </div>
            <br />
            <h3>Ganancias del dia: $20000</h3>
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
                        {
                            galletas.map((galleta, index) => {
                                
                                return (
                                    <tr>
                                        <td>{galleta.Nombre}</td>
                                        <td>{galleta.Cantidad}</td>
                                        <td>800</td>
                                        <td>0</td>
                                        <td>$7000</td>
                                        <td>$5000</td>
                                        <td>$2000</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InicioVentas