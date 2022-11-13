import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Inicio = () => {
    const [productos, setProductos] = React.useState([])
 
    const obtenerProductos = () => {
        let products = [];
        products = JSON.parse(localStorage.getItem('productos'));

        setProductos(products);
    }
    
    const mermarProducto = (nombre, merma) => {
        const MySwal = withReactContent(Swal)

        let products = [];
        products = JSON.parse(localStorage.getItem('productos'));
        products.forEach(producto => {
            if(producto.Nombre === nombre){
                if(producto.Cantidad >= merma){
                producto.Cantidad = producto.Cantidad - merma;
                }else{
                    MySwal.fire({
                        title: <strong>Imposible</strong>,
                        html: <i>No puedes mermar mas producto del que hay en inventario</i>,
                        icon: 'error'
                    })     
                }
            }
        });
        localStorage.setItem('productos', JSON.stringify(products));
        obtenerProductos();
    }

    const calculateAlert = (Cantidad) => {
        let alert = "";

        if(Cantidad >= 25){
            alert = "table-success";
        }else if(Cantidad > 10 && Cantidad < 25){
            alert = "table-warning";
        }else{
            alert = "table-danger";
        }
        return alert;
    }

    React.useEffect(() => {
        obtenerProductos()
    }, [])
    
    return (
        <div class="container">
            <div class="row mx-auto text-center">
                <div class="col-1">
                    <Link to={"/Cocina"}>
                        <button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                        </svg></button>
                    </Link>
                </div>
                <div class="col-10">
                    <h1 class="fs-1">ALMACEN</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Mermar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((producto) => {
                                const alert = calculateAlert(producto.Cantidad);
                                let merma=0;

                                return (
                                    <tr class={alert} >
                                        <td>{producto.Nombre}</td>
                                        <td>{producto.Cantidad} {producto.Cuantidad}</td>
                                        <td><input type="number" 
                                        onChange={(e) => {merma = e.target.value}}/>
                                        <button class="botonBasura"
                                        onClick={() => mermarProducto(producto.Nombre, merma)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></button></td>
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

export default Inicio