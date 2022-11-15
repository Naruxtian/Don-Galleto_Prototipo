import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Ventas = () => {


    const [galletas, setGalletas] = React.useState([])
    const [galletas1, setGalletas1] = React.useState([])
    const [galletas2, setGalletas2] = React.useState([])
    const [galletaSel1, setGalletaSel1] = React.useState({})
    const [nomGalletaSel, setNomGalletaSel] = React.useState("Seleccione una Galleta")
    //const [costGalletaSel, setCostGalletaSel] = React.useState("")
    const [opcionCantidad, setOpcionCantidad] = React.useState("")
    const [cantidad, setCantidad] = React.useState("")

    const [listCarrito,setListCarrito]= React.useState([]);
    const [total,setTotal]= React.useState([]);

    const [opcDescuento, setOpcDescuento] = React.useState(false);

    const obtenerGalletas = async () => {
        let galletas = [];
        galletas = JSON.parse(localStorage.getItem('galletas'));
        console.log(galletas)
        setGalletas(galletas);
        obtenerGalletas1(galletas)
        obtenerGalletas2(galletas)
    }

    const obtenerGalletas1 = async (galletas) => {
        let galletas1 = [];
        for (let i = 0; i < 5; i++) {
            galletas1.push(galletas[i]);
            console.log(galletas[i])
        }
        setGalletas1(galletas1);

    }

    const obtenerGalletas2 = async (galletas) => {
        let galletas2 = [];
        for (let i = 5; i < 10; i++) {
            galletas2.push(galletas[i]);
        }
        setGalletas2(galletas2);
        console.log(galletas2);
    }


   const obtenerCarrito = ()=>{
    setListCarrito(JSON.parse(localStorage.getItem('carrito')))
    obtenerTotal();
   }


   const removeItemCarrito = (nombre) =>{
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let carritoFiltrado = carrito.filter((item)=>item.Nombre !== nombre);
    localStorage.setItem('carrito', JSON.stringify(carritoFiltrado));
    obtenerCarrito();

   }

   const obtenerTotal = ()=>{
    let nTotal = 0;
    listCarrito.map((galletaCar) => {
       nTotal=nTotal+(galletaCar.Costo*1)
    })
     setTotal(nTotal)
    }
   

    React.useEffect(() => {
        //dividirGalletas()
        obtenerGalletas();
        obtenerCarrito();
    }, [])

    React.useEffect(() => {

    }, [nomGalletaSel])

    React.useEffect(() => {
    obtenerTotal();
    }, [listCarrito])

    React.useEffect(() => {

    }, [galletaSel1])

    const seleccionarGalleta = (galletaSel) => {
        console.log(galletaSel);
        setNomGalletaSel(galletaSel.Nombre);
        setGalletaSel1(galletaSel);
        //setCostGalletaSel(costo);
    }

   const agregarCarrito = () => {
   // galletaSel
        let carrito = [];
       carrito = JSON.parse(localStorage.getItem('carrito'));
        let precio=0;
        let medida;
        let totalCantidad;
        console.log("galletas pasada:");
        console.log(galletaSel1);
        if(opcionCantidad === "dinero"){
           precio= cantidad;
            medida="Kg";
            totalCantidad= cantidad/galletaSel1.PrecioPeso;
        }else if(opcionCantidad === "piezas"){
            precio= cantidad*galletaSel1.PrecioUnidad;
            medida="Pz";
            totalCantidad=cantidad;
        }else if(opcionCantidad === "kilos"){
            precio= cantidad*galletaSel1.PrecioPeso;
            medida="Kg";
            totalCantidad=cantidad;
        }else if(opcionCantidad === "paquetes"){
            precio= cantidad*galletaSel1.PrecioPaquete;
            medida="Paq";
            totalCantidad=cantidad;
        }
        let galletaCarrito = {
            Nombre: nomGalletaSel,
            Cantidad: totalCantidad,
            Medida: medida,
            Costo: precio,
        }
        carrito.push(galletaCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        obtenerCarrito();
        console.log(carrito);
    }

    
   const realizarVenta = () => {
    let venta1=[];
    let carrito=[];
    let ventacarro = [];
    let galletas=[];
    galletas = JSON.parse(localStorage.getItem('galletas'));
    carrito = listCarrito;
    let venta = JSON.parse(localStorage.getItem('ventas'));
    carrito.map((galletaCar) => {
       if(galletaCar.Medida === "Kg"){
        let galletaVenta = {
            Nombre: galletaCar.Nombre,
            Cantidad: galletaCar.Cantidad,
            Medida: galletaCar.Medida,
            Costo: galletaCar.Costo,
            Fecha: new Date().toLocaleDateString()
        }
        console.log(galletaVenta)
        venta1.push(galletaVenta);
        galletaCar.Cantidad = galletaCar.Cantidad*40;
        galletaCar.Cantidad = galletaCar.Cantidad.toFixed(0);
        let galletaCarrito = {
            Nombre: galletaCar.Nombre,
            Cantidad: galletaCar.Cantidad,
        };
        ventacarro.push(galletaCarrito);
       }else if(galletaCar.Medida === "Pz"){
        let galletaVenta = {
            Nombre: galletaCar.Nombre,
            Cantidad: galletaCar.Cantidad,
            Medida: galletaCar.Medida,
            Costo: galletaCar.Costo,
            Fecha: new Date().toLocaleDateString(),
        }
        console.log(galletaVenta)
        venta1.push(galletaVenta);
        let galletaCarrito = {
            Nombre: galletaCar.Nombre,
            Cantidad: galletaCar.Cantidad,
        };
        ventacarro.push(galletaCarrito);
         }else if(galletaCar.Medida === "Paq"){
            let galletaVenta = {
                Nombre: galletaCar.Nombre,
                Cantidad: galletaCar.Cantidad,
                Medida: galletaCar.Medida,
                Costo: galletaCar.Costo,
                Fecha: new Date().toLocaleDateString(),
            }
            console.log(galletaVenta)
            venta1.push(galletaVenta);
            let galletaCarrito = {
                Nombre: galletaCar.Nombre,
                Cantidad: galletaCar.Cantidad,
            };
            ventacarro.push(galletaCarrito);
            }
            
    })
     
    venta = venta1

    ventacarro.map((galletaCar) => {
        galletas.map((galleta) => {
            if(galleta.Nombre === galletaCar.Nombre){
                galleta.Cantidad = galleta.Cantidad - galletaCar.Cantidad;
            }
        })
    }) 
     localStorage.setItem('ventas', JSON.stringify(venta));
     localStorage.setItem('galletas', JSON.stringify(galletas));
    //localStorage.setItem('carrito', "nose");	
    console.log(localStorage.getItem('ventas'));
    console.log(localStorage.getItem('galletas'));
    localStorage.setItem("carrito",JSON.stringify([{Nombre:"Canela",
      Cantidad: 2,
      Medida: "pz",
      Costo: 100}]))
    console.log("limpio");
    }



    return (
        <div class="container row">
            <div class="row ">
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
            <div class="row marginVentas">
                <div class="col-2 ">
                    {
                        galletas1.map((galleta1) => {
                            return (
                                <>
                                    <button class='botonSeccion21' onClick={(e) => { seleccionarGalleta(galleta1) }}>{galleta1.Nombre}
                                        <br />
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M8 13v.01"></path>
                                            <path d="M12 17v.01"></path>
                                            <path d="M12 12v.01"></path>
                                            <path d="M16 14v.01"></path>
                                            <path d="M11 8v.01"></path>
                                            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                                        </svg></button>
                                </>
                            )
                        })
                    }
                    {/* <button class='botonSeccion2'>Canela<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Rellenas de naranja<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Mantequilla con fresa<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate sin gluten<br />(GALLETA)</button> */}
                </div>
                <div class="col-2">
                    {
                        galletas2.map((galleta2) => {
                            return (
                                <>
                                    <button class='botonSeccion21' onClick={(e) => { seleccionarGalleta(galleta2) }}>{galleta2.Nombre}
                                        <br />
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M8 13v.01"></path>
                                            <path d="M12 17v.01"></path>
                                            <path d="M12 12v.01"></path>
                                            <path d="M16 14v.01"></path>
                                            <path d="M11 8v.01"></path>
                                            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                                        </svg></button>
                                </>
                            )
                        })
                    }
                    {/* <button class='botonSeccion2'>Mantequilla<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Pasas y avena<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Integral<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Chocolate con nueces<br />(GALLETA)</button>
                    <button class='botonSeccion2'>Rellens de natilla<br />(GALLETA)</button> */}
                </div>
                <div class="col-4">
                    <h4>{nomGalletaSel}</h4>
                    <div class='divSeccion'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="200" height="200" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 13v.01"></path>
                        <path d="M12 17v.01"></path>
                        <path d="M12 12v.01"></path>
                        <path d="M16 14v.01"></path>
                        <path d="M11 8v.01"></path>
                        <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                    </svg></div><br />
                    <div class="row">
                        <div class="row mx-auto">
                            <div class="col-7">
                                <button class='botonOpcion' onClick={(e)=>{setOpcionCantidad("dinero")}}>Cant/dinero</button>
                            </div>
                            <div class="col-2">
                                <button class='botonOpcion' onClick={(e)=>{setOpcionCantidad("piezas")}}>Piezas</button>
                            </div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-7">
                                <button class='botonOpcion' onClick={(e)=>{setOpcionCantidad("kilos")}}>Peso</button>
                            </div>
                            <div class="col-2">
                                <button class='botonOpcion' onClick={(e)=>{setOpcionCantidad("paquetes")}}>Paquetes</button>
                            </div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-7" >
                                <h3>$</h3><input type="number" style={{width:"70px"}} onChange={(e)=>{setCantidad(event.target.value)}}/>
                            </div>
                            <div class="col-2 mt-2">
                                <button class='botonOpcion' onClick={(e)=>{agregarCarrito()}}>Agregar <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 carrito">
                    <div class="row">
                        <h2>Carrito <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                        </svg></h2>
                        <div>
                            <h3>Lista de compra</h3>
                            <div class="row">
                            <ul class="list-group list-group-flush">
                
                                {
                                listCarrito.map((listcar) => {
                                    return (
                                        <>
                                            <li class="list-group-item">{listcar.Nombre} {listcar.Cantidad} {listcar.Medida} ${listcar.Costo}
                                            <button class="botonBasura" style={{marginLeft:"10px"}}
                                            onClick={() => removeItemCarrito(listcar.Nombre)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg></button>
                                            </li>
                                        </> 
                                    )
                                })
                                }
                                </ul>
                                {/* <label>galleta piezas precio</label>
                                <label>galleta piezas precio</label>
                                <label>galleta piezas precio</label>
                                <label>galleta piezas precio</label> */}
                            </div>
                            <div>
                                {
                                opcDescuento&&(
                                <div class="mt-2">
                                    <h5>Descuento: $</h5>
                                    <input type="number" />
                                </div>
                                )
                                  }
                                <div class="mt-2">
                                    <h4>Total: $ {total}</h4>
                                </div>
                                <div class="mb-5">
                                    <button onClick={(e)=>{setOpcDescuento(true)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16">
                                        <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                    </svg></button>
                                    <button onClick={(e)=>{realizarVenta()}}>Vender <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="row mx-auto carrito">
                <div class="col-10 carrito">
                    <h2>Carrito (ICONO)</h2>
                </div>
            </div> */}
        </div>
    )
}

export default Ventas