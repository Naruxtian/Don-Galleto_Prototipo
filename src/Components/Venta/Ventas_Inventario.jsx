import * as React from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Inventario = () => {
    const [merma, setMerma] = React.useState(true);
    const [galletas, setGalletas] = React.useState([])
     let listMermas=[];
     const [mermasList,setMermasList] = React.useState([])

    const obtenerGalletas = () => {
        let galletas = [];
        galletas = JSON.parse(localStorage.getItem('galletas'));

        setGalletas(galletas);
    }

    const ValidarMermarGalleta = (cantidad,catidadGalletas,nombreG) =>{
        const MySwal = withReactContent(Swal)
        if(cantidad > catidadGalletas){
            MySwal.fire({
                                    title: <strong>Imposible</strong>,
                                    html: <i>No puedes mermar mas galleta de {nombreG} del que hay en inventario</i>,
                                   icon: 'error'
                                }) 
        }else{
             validarlistamerma(nombreG,cantidad);
            }
    }

    const validarlistamerma = (nombre,cantidad) =>{
        let listMermas2 = [];
        if(listMermas.length > 0){
            for (var i = 0; i < listMermas.length; i++) {
                    console.log("valores pasados: "+nombre+" merma nombre:"+listMermas[i].nombre);
                    if(nombre === listMermas[i].nombre){
                        console.log("entro al if modifica el que existe")
                        listMermas[i].cantidad = cantidad;
                        console.log("galleta "+listMermas[i].nombre+" cantidad nueva: "+listMermas[i].cantidad)
                    }
                    else{
                        //listMermas2.push({nombre:nombre,cantidad:cantidad});
                        console.log("no existe "+nombre);
                        listMermas.push({nombre:nombre,cantidad: cantidad});
                      }
                     // console.log(listMermas);
                     console.log(listMermas);
                     console.log(i)
              }
            // listMermas.map((mermaGalletas)=> {
            //     console.log("valores pasados: "+nombre+" merma nombre:"+merma.nombre);
            //     if(nombre === mermaGalletas.nombre){
            //         console.log("entro al if modifica el que existe")
            //         mermaGalletas.cantidad = cantidad;
            //         console.log("galleta "+merma.nombre+" cantidad nueva: "+merma.cantidad)
            //     }
            //     else{
            //         listMermas2.push({nombre:nombre});
            //         console.log("no existe "+nombre);
            //         listMermas.push({nombre:nombre,cantidad: cantidad});
            //       }
            //      // console.log(listMermas);
            //     }
                
            // );
        }else{
                //listMermas2.push({nombre:nombre});
                console.log("lista vacia agregando")
                listMermas.push({nombre:nombre,cantidad: cantidad});
                console.log(listMermas);
                //console.log(listMermas);
            }
            
           // setMermasList(listMermas);
        //   if(listMermas.includes(nombreG)){
        //        console.log("ya existe");
        //         listMermas[listMermas.findIndex(nombre == nombreG)].cantidad = cantidad;
           
        // //   }else{
        //     console.log("no existe "+nombreG);
        //     listMermas.push({nombre:nombreG,cantidad: cantidad});
        //   }
        //   console.log(listMermas);
        // }
        //console.log(listMermas2);
    }

    const mermarGalleta = (listaG) => {
    let mermaG = [];
    const result = [];

    listaG.map((galleta , index) => {
     listMermas.map((merma , index) => {
        if(galleta.nombre === merma.nombre){
            if(mermaG.nombre === merma.nombre){
                console.log("ya existe");
            }else{
                mermaG.push(galleta);
            }
        }
     })
    });

  console.log(mermaG);

    }

    // const mermarProducto = (nombre, merma) => {
    //     const MySwal = withReactContent(Swal)

    //     let products = [];
    //     products = JSON.parse(localStorage.getItem('productos'));
    //     products.forEach(producto => {
    //         if(producto.Nombre === nombre){
    //             if(producto.Cantidad >= merma){
    //             producto.Cantidad = producto.Cantidad - merma;
    //             }else{
    //                 MySwal.fire({
    //                     title: <strong>Imposible</strong>,
    //                     html: <i>No puedes mermar mas producto del que hay en inventario</i>,
    //                     icon: 'error'
    //                 })     
    //             }
    //         }
    //     });
    //     localStorage.setItem('productos', JSON.stringify(products));
    //     obtenerProductos();
    // }

    // const calculateAlert = (Cantidad) => {
    //     let alert = "";

    //     if(Cantidad >= 25){
    //         alert = "table-success";
    //     }else if(Cantidad > 10 && Cantidad < 25){
    //         alert = "table-warning";
    //     }else{
    //         alert = "table-danger";
    //     }
    //     return alert;
    // }

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
                <div class="col-8">
                    <h1 class="fs-1">INVENTARIO DE GALLETAS</h1>
                </div>
            </div>
            <br />
            <br />
            <div class="row"> 
                {
                    merma ? (
                        <div class="row mx-auto">
                          {
                        galletas.map((galleta, index) => {
                            return (
                                <div class="col-2">
                                    <div class='botonSeccion2Modificado' style={{backgroundColor:"white"}}>
                                        <h6>{galleta.Nombre}</h6>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M8 13v.01"></path>
                                            <path d="M12 17v.01"></path>
                                            <path d="M12 12v.01"></path>
                                            <path d="M16 14v.01"></path>
                                            <path d="M11 8v.01"></path>
                                            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                                        </svg>
                                        </div>
                                        <h6>{galleta.Cantidad}</h6> 
                                        <div>
                                            <input type="number" class="inputMermas" max={galleta.Cantidad} onChange={(e)=>{ValidarMermarGalleta(event.target.value,galleta.Cantidad,galleta.Nombre)}}/>
                                            <button class="botonBasura">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                        </button>
                                            </div>
                                            </div>
                                </div>
                            )
                        })
                    }
                    <div class="col-12 merma">
                        <div class="groupMerma">
                        <button class='botonCancelarMerma'onClick={(e)=>{setMerma(false)}}>Cancelar</button>
                        <button class='botonAceptarMerma' onClick={(e)=>{mermarGalleta(listMermas)}}>Aceptar</button>
                        </div>
                    </div>    
                </div>
                       
                    ) : (
                        //retorno de cuando no selecciona merma
                        <div class="row mx-auto">
                            {
                        galletas.map((galleta, index) => {
                            return (
                                <div class="col-2">
                                    <button class='botonSeccion2'>{galleta.Nombre}
                                        <br />
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cookie" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M8 13v.01"></path>
                                            <path d="M12 17v.01"></path>
                                            <path d="M12 12v.01"></path>
                                            <path d="M16 14v.01"></path>
                                            <path d="M11 8v.01"></path>
                                            <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                                        </svg>
                                        <br />{galleta.Cantidad}</button>
                                </div>
                            )
                        })
                    }
                    <div class="col-12 merma">
                        <button class='botonMermar'>Mermar(GALLETA)</button>
                    </div>
                        </ div>
                    )
                }

            </div>

        </div>
    )
}

export default Inventario