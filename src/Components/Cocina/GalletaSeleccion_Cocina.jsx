import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Inicio = () => {
    const [galleta, setGalleta] = React.useState("")
    const [lotes, setLotes] = React.useState(1)
    const [ingredientes, setIngredientes] = React.useState([])
    const [productos, setProductos] = React.useState([])
    const [disabled, setDisabled] = React.useState(false)

    const obtnGalleta = () => {
        const galleta = JSON.parse(localStorage.getItem('galletaCocinar'));
        setGalleta(galleta);
    }

    const obtenerProductos = () => {
        let products = [];
        products = JSON.parse(localStorage.getItem('productos'));

        setProductos(products);
    }

    React.useEffect(() => {
        obtnGalleta()     
        obtenerProductos()
    }, [])

    const aumentarLotes = () => {
        setLotes((lotes)*1 + 1)
    }

    const disminuirLotes = () => {
        if (lotes > 1) {
            setLotes(lotes - 1)
        }
    }

    const calcularIngredientes = () => {
        const MySwal = withReactContent(Swal)

        const harina = lotes * 1;
        const azucar = lotes * .5;
        const mantequilla = lotes * .25;
        const huevo = lotes * .25;
        const aceite = lotes * .75;
        const leche = lotes * .5;

        const ings = [
            { Nombre: "Harina", Cantidad: harina, Unidad: "Kg" },
            { Nombre: "Azucar", Cantidad: azucar, Unidad: "Kg" },
            { Nombre: "Mantequilla", Cantidad: mantequilla, Unidad: "Kg" },
            { Nombre: "Huevo", Cantidad: huevo, Unidad: "Kg" },
            { Nombre: "Aceite", Cantidad: aceite, Unidad: "L" },
            { Nombre: "Leche", Cantidad: leche, Unidad: "L" },
        ]

        setIngredientes(ings)
        let vd = 0;
        ings.forEach(ingrediente => {
            productos.forEach(producto => {
                if(ingrediente.Nombre === producto.Nombre){
                    if(ingrediente.Cantidad >= producto.Cantidad){
                        const nombre = ingrediente.Nombre;
                        vd ++;
                        MySwal.fire({
                            icon: 'error',
                            title: 'Imposible',
                            html: <i>No hay suficiente {nombre} para realizar esa cantidad de lotes</i>,
                          })
                    }
                }
            });
        });

        if(vd !== 0){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }

    const agregarInventario = () => {
        let galletas = [];
        galletas = JSON.parse(localStorage.getItem('galletas'));

        galletas.forEach(cookie => {
            if(cookie.Nombre === galleta){
                cookie.Cantidad = cookie.Cantidad + (lotes * 25);
            }
        });

        localStorage.setItem('galletas', JSON.stringify(galletas));
}

    const confirmarCocinado = () => {
        const MySwal = withReactContent(Swal)
        
        MySwal.fire({
            title: 'Terminó de cocinar?',
            text: "Se agregarán las galletas al inventario",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
                agregarInventario();
                restarIngredientes();
                let timerInterval
                Swal.fire({
                title: 'Exito',
                text: 'Se agregaron las galletas al inventario',
                icon: 'success',
                timer: 2500,
                timerProgressBar: false,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    window.location.href = "/cocina";
                }
                })
            }
          })
    }

    const restarIngredientes = () => {
        let productos = [];
        productos = JSON.parse(localStorage.getItem('productos'));

        productos.forEach(product => {
            ingredientes.forEach(ing => {
                if(product.Nombre === ing.Nombre){
                    product.Cantidad = product.Cantidad - ing.Cantidad;
                }
            });
        });

        localStorage.setItem('productos', JSON.stringify(productos));
    }

    React.useEffect(() => {
        calcularIngredientes()
    }, [lotes])

    return (
        <div class="container">
            <div class="row mx-auto text-center">
                <div class="col-1">
                    <Link to={"/Cocina/Cocinar"}>
                        <button class='botonRegresar'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
                        </svg></button>
                    </Link>
                </div>
                <div class="col-10">
                    <h1 class="fs-1">{galleta}</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <div>
                    <label class="fs-3">Lotes:</label>
                    <br/>
                    <button class="btn btn-outline-dark" type='button' 
                    onClick={() => disminuirLotes()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg></button>
                    <input type="number" class="inputTamaño" value={lotes} 
                    onChange={(e) => setLotes(e.target.value)} readOnly/>
                    <button class="btn btn-outline-dark" type='button' 
                    onClick={() => aumentarLotes()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg></button>
                </div> <br /> <br />

                <div class="col-12">
                    <div class="col-6 divTamaño">
                        <h3 class="fs-1">Ingredientes:</h3>
                        <ul class="list-group list-group-flush">
                            {
                                ingredientes.map((ing, index) => {
                                    return (
                                        <li class="list-group-item listaIngredientes" key={index}>
                                            {ing.Nombre} - {ing.Cantidad} {ing.Unidad}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div class="col-6 divTamaño">
                        <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'
                        data-bs-toggle="modal" data-bs-target="#RecetaModal" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                            <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                            <path d="M9 8h6"></path>
                        </svg>Receta</button> <br /> <br />
                        <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'
                        data-bs-toggle="modal" data-bs-target="#CocinandoModal" disabled={disabled}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

            <div class="modal fade" id="CocinandoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="CocinandoLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="CocinandoLabel">COCINANDO:</h5>
                </div>
                <div class="modal-body">
                    <h3>{lotes} lotes de {galleta}</h3>
                    <br/>
                    <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'
                        data-bs-toggle="modal" data-bs-target="#RecetaModal" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="75" height="75" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                            <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                            <path d="M9 8h6"></path>
                        </svg></button> 
                        <br/>
                        <br/>
                    <h5>Seleccione finalizar una vez termine de cocinar.</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger btn-lg" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal"
                    onClick={() => confirmarCocinado()}
                    >Finalizar</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="RecetaModal" tabindex="-1" aria-labelledby="RecetaLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="RecetaLabel">Receta de: {galleta}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                Precalentamos el horno a 180ºC.
                </li>
                <li class="list-group-item">
                Batimos la mantequilla con el azúcar hasta obtener una mezcla con textura de crema completamente homogénea.
                </li>
                <li class="list-group-item">
                Añadimos la harina cucharada a cucharada según vamos mezclándolo todo
                </li>
                <li class="list-group-item">
                Hacemos bolas y las aplastamos para darle forma a las galletas de unos 6 cm de ancho y 3 mm de espesor. Las ponemos en papel sobre una bandeja de horno.
                </li>
                <li class="list-group-item">
                Horneamos 12 minutos a 180ºC con calor arriba y abajo. Vigilad que no se pasen porque cada horno es un mundo y si son de diferente tamaño necesitarán más o menos tiempo.
                </li>
                <li class="list-group-item">
                Sacamos las galletas del horno y las ponemos a enfriar sobre una rejilla unos 15 minutos.
                </li>
                </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
            </div>                

        </div>
    )
}

export default Inicio