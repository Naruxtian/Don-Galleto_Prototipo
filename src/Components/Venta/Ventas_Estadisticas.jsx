import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const InicioVentas = () => {
    const [galletas, setGalletas] = React.useState([]);
    const [ganancias, setGanancias] = React.useState(0);
    const [date, setDate] = React.useState(new Date());

    const obtenerGalletas =  () => {
        let gall= []
        gall = JSON.parse(localStorage.getItem('galletas'))
        setGalletas(gall)
    }

    const calcularGanancias = () => {
        let gn = 0;
        galletas.forEach(galleta => {
            const ventas = galleta.vendidas * galleta.PrecioUnidad;
            const insumos = (galleta.cocinadas * galleta.insumos)/25;
            const utilidad = ventas - insumos;
            gn += utilidad
        });
        setGanancias(gn)
    }

    React.useEffect(() => {
        obtenerGalletas()
    }, [])

    React.useEffect(() => {
        calcularGanancias()
    }, [galletas])

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
            <h3>Ganancias del dia: ${ganancias}</h3>
            <div class="row mx-auto">
                <table class="table table-striped table-bordered table-light">
                    <thead class="table-dark">
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
                                const ventas = galleta.vendidas * galleta.PrecioUnidad;
                                const insumos = (galleta.cocinadas * galleta.insumos)/25;
                                const utilidad = ventas - insumos;
                                return (
                                    <tr>
                                        <td>{galleta.Nombre}</td>
                                        <td>{galleta.cocinadas}</td>
                                        <td>{galleta.vendidas}</td>
                                        <td>{galleta.mermadas}</td>
                                        <td>{ventas}</td>
                                        <td>{insumos}</td>
                                        <td>{utilidad}</td>
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