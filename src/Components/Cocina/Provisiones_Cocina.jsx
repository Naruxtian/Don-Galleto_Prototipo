import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Inicio = () => {
    const [provedor, setProvedor] = React.useState("");
    const [provisiones, setProvisiones] = React.useState([]);

    const [harina, setHarina] = React.useState(0);
    const [huevo, setHuevo] = React.useState(0);
    const [choco, setChocolate] = React.useState(0);
    const [avena, setAvena] = React.useState(0);
    const [azucar, setAzucar] = React.useState(0);
    const [leche, setLeche] = React.useState(0);
    const [aceite, setAceite] = React.useState(0);
    const [pasas, setPasas] = React.useState(0);
    const [mermelada, setMermelada] = React.useState(0);
    const [mantequilla, setMantequilla] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    const [productoManual, setProductoManual] = React.useState("Harina");
    const [cantidadProvManual, setCantidadProvManual] = React.useState(0);
    const [costoProvManual, setCostoProvManual] = React.useState(0);
    const [lugarProvManual, setLugarProvManual] = React.useState("");
    
    const [cuantitividad, setCuantitividad] = React.useState("Kg.");

    const agregarProvision=()=>{
        const MySwal = withReactContent(Swal)
        let provisiones = [];
        provisiones = JSON.parse(localStorage.getItem("provisiones"));

        if(provisiones == null){
            provisiones = [];
        }

        if(total > 0 && provedor !== "" && harina >= 0 && huevo >= 0 && choco >= 0 && avena >= 0 && azucar >= 0 && leche >= 0 && aceite >= 0 && pasas >= 0 && mermelada >= 0 && mantequilla >= 0){
                const fecha = new Date();
                let prov = {
                    provedor: provedor,
                    harina: harina,
                    huevo: huevo,
                    chocolate: choco,
                    avena: avena,
                    azucar: azucar,
                    leche: leche,
                    aceite: aceite,
                    pasas: pasas,
                    mermelada: mermelada,
                    mantequilla: mantequilla,
                    total: total,
                    fecha: fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()
                }
                agregarProductosInventario(prov);
                provisiones.push(prov);
                localStorage.setItem("provisiones", JSON.stringify(provisiones));

                setHarina(0);
                setHuevo(0);
                setChocolate(0);
                setAvena(0);
                setAzucar(0);
                setLeche(0);
                setAceite(0);
                setPasas(0);
                setMermelada(0);
                setMantequilla(0);
                setTotal(0);
                
                MySwal.fire({
                    title: <strong>Correcto</strong>,
                    html: <i>Los productos han sido agregados al inventario correctamente</i>,
                    icon: 'success'
                })
            }else{
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Verifica los datos y vuelve a intentarlo</i>,
                icon: 'error'
            })     
        }
        obtenerProvisiones();
    }

    const agregarProvisionManual=()=>{
        const MySwal = withReactContent(Swal)
        let provisiones = [];
        provisiones = JSON.parse(localStorage.getItem("provisiones"));

        if(provisiones == null){
            provisiones = [];
        }
        
        if(cantidadProvManual > 0 && costoProvManual > 0 && lugarProvManual !== ""){
                const fecha = new Date();
                let prov = {
                    provedor: "Manual",
                    producto: productoManual,
                    cantidad: cantidadProvManual,
                    total: costoProvManual,
                    lugar: lugarProvManual,
                    fecha: fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()
                }
                agregarProductoManualInventario(prov);
                provisiones.push(prov);
                localStorage.setItem("provisiones", JSON.stringify(provisiones));

                setCantidadProvManual(0);
                setCostoProvManual(0);
                setLugarProvManual("");
                
                MySwal.fire({
                    title: <strong>Correcto</strong>,
                    html: <i>El producto se ha agregado al inventario correctamente</i>,
                    icon: 'success'
                })
            }else{
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Verifica los datos y vuelve a intentarlo</i>,
                icon: 'error'
            })
        }
        obtenerProvisiones();
    }

    const handleProductoManual=(prov)=>{
        switch (prov) {
            case "0":
                setProductoManual("Harina");
                setCuantitividad("Kg.");
                break;
            case "1":
                setProductoManual("Huevo");
                setCuantitividad("Kg.");
                break;
            case "2":
                setProductoManual("Chocolate");
                setCuantitividad("Kg.");
                break;
            case "3":
                setProductoManual("Avena");
                setCuantitividad("Kg.");
                break;
            case "4":
                setProductoManual("Azucar");
                setCuantitividad("Kg.");
                break;
            case "5":
                setProductoManual("Leche");
                setCuantitividad("L.");
                break;
            case "6":
                setProductoManual("Aceite");
                setCuantitividad("L.");
                break;
            case "7":
                setProductoManual("Pasas");
                setCuantitividad("Kg.");
                break;
            case "8":
                setProductoManual("Mermelada");
                setCuantitividad("Kg.");
                break;
            case "9":
                setProductoManual("Mantequilla");
                setCuantitividad("Kg.");
                break;
            default:
                break;
        }
    }

    const agregarProductoManualInventario=(prov)=>{
        let productos = [];
        productos = JSON.parse(localStorage.getItem("productos"));

        productos.forEach(producto => {
            if(producto.Nombre === prov.producto){
                producto.Cantidad += (prov.cantidad *1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productos));
    }

    const agregarProductosInventario = (prov) => {
        let productos = [];
        productos = JSON.parse(localStorage.getItem("productos"));

        productos.forEach(producto => {
            if(producto.Nombre === "Harina"){
                producto.Cantidad += (prov.harina * 1);
            }else if(producto.Nombre === "Huevo"){
                producto.Cantidad += (prov.huevo * 1);
            }else if(producto.Nombre === "Chocolate"){
                producto.Cantidad += (prov.chocolate * 1);
            }else if(producto.Nombre === "Avena"){
                producto.Cantidad += (prov.avena * 1);
            }else if(producto.Nombre === "Azucar"){
                producto.Cantidad += (prov.azucar * 1);
            }else if(producto.Nombre === "Leche"){
                producto.Cantidad += (prov.leche * 1);
            }else if(producto.Nombre === "Aceite"){
                producto.Cantidad += (prov.aceite * 1);
            }else if(producto.Nombre === "Pasas"){
                producto.Cantidad += (prov.pasas * 1);
            }else if(producto.Nombre === "Mermelada"){
                producto.Cantidad += (prov.mermelada * 1);
            }else if(producto.Nombre === "Mantequilla"){
                producto.Cantidad += (prov.mantequilla * 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productos));
    }
    
    const obtenerProvisiones = () => {
        let provis = [];
        provis = JSON.parse(localStorage.getItem("provisiones"));

        if(provis == null){
            provis = [];
        }
        setProvisiones(provis);
    }

    React.useEffect(() => {
        obtenerProvisiones();
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
                <div class="col-8">
                    <h1 class="fs-1">PROVISIONES</h1>
                </div>
                <div class="col-2">
                    <button class='botonHistorial fs-5' data-bs-toggle="modal" data-bs-target="#HistorialModal"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>Historial</button>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <div class="col-12">
                    <div class="col-5 divProveedores ">

                        <div class="form-check border border-dark containerProveedor">
                        <input class="form-check-input" type="radio" name="proveedor" id="proveedor1"  onClick={() => setProvedor("Don Camerino")}/>
                            <label class="form-check-label" for="proveedor1" style={{marginLeft:"5px"}}>
                                Don Camerino - 4771234567
                            </label>
                        </div>

                        <div class="form-check border border-dark containerProveedor">
                        <input class="form-check-input" type="radio" name="proveedor" id="proveedor2" onClick={() => setProvedor("Don Peluche")}/> 
                            <label class="form-check-label" for="proveedor2" style={{marginLeft:"5px"}}>
                                Don Peluche - 4771234567
                            </label>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-6 containerInputsProvision">
                                <div class="input-group mb-3">
                                    <label>Harina: </label>
                                    <input type="number" class="inputProvision" min="0" 
                                    value={harina} onChange={(e) => setHarina(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Huevo: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={huevo} onChange={(e) => setHuevo(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Chocolate: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={choco} onChange={(e) => setChocolate(e.target.value)}
                                    />
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Avena: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={avena} onChange={(e) => setAvena(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Azucar: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={azucar} onChange={(e) => setAzucar(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                            </div>
                                
                            <div class="col-6">
                            <div class="input-group mb-3">
                                    <label>Leche: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={leche} onChange={(e) => setLeche(e.target.value)}/>
                                    <label>L.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Aceite: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={aceite} onChange={(e) => setAceite(e.target.value)}/>
                                    <label>L.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Pasas: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={pasas} onChange={(e) => setPasas(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Mermelada: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={mermelada} onChange={(e) => setMermelada(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                                <div class="input-group mb-3">
                                    <label>Mantequilla: </label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={mantequilla} onChange={(e) => setMantequilla(e.target.value)}/>
                                    <label>Kg.</label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="input-group mb-3 ">
                                    <label><strong>Total: $</strong></label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={total} onChange={(e) => setTotal(e.target.value)}/>
                        </div>
                        <div class="row mx-auto text-center btn-group btn-group-justified">
                            <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'
                            onClick={() => agregarProvision()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>Aceptar</button>
                        </div>
                    </div>

                    <div class=" col-5 mx-auto text-center divProveedores border border-dark">
                        <h4 class="fs-2">Provisión Manual</h4>
                        <br/>
                        <div class="row">
                            <div class="col-6 divTamaño">
                                <select class="form-select selectTamaño" aria-label="Default select example" onChange={(e) => handleProductoManual(e.target.value)}>
                                    <option selected value="0">Harina</option>
                                    <option value="1">Huevo</option>
                                    <option value="2">Chocolate</option>
                                    <option value="3">Avena</option>
                                    <option value="4">Azucar</option>
                                    <option value="5">Leche</option>
                                    <option value="6">Aceite</option>
                                    <option value="7">Pasas</option>
                                    <option value="8">Mermelada</option>
                                    <option value="9">Mantequilla</option>
                                </select>
                            </div>
                            <div class="col-6 divTamaño2">
                                <input type="number" class="inputProvision" min="0"
                                value={cantidadProvManual} onChange={(e) => setCantidadProvManual(e.target.value)}/>
                                <label>{cuantitividad}</label>
                            </div>
                            </div>
                             <br /> 
                            <div class="input-group mb-3">
                                    <label>Costo: $</label>
                                    <input type="number" class="inputProvision" min="0"
                                    value={costoProvManual} onChange={(e) => setCostoProvManual(e.target.value)}/>
                                    
                            </div>
                            <br />
                            <div class="input-group mb-3">
                                    <label>Lugar: </label>
                                    <input type="Text" class="inputProvision" min="0"
                                    value={lugarProvManual} onChange={(e) => setLugarProvManual(e.target.value)}
                                    />
                            </div>
                        <div class="row mx-auto text-center btn-group btn-group-justified">
                            <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'
                            onClick={() => agregarProvisionManual()}
                            ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="HistorialModal" tabindex="-1" aria-labelledby="RecetaLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="RecetaLabel">Historial de provisiones</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="list-group list-group-flush">
                    {
                        provisiones.length > 0 ? (
                            provisiones.map((provision) => (
                                <li class="list-group-item">
                                {provision.provedor} - {provision.fecha} - ${provision.total}
                                </li>
                            ))
                        ) : (
                            <div class="alert alert-danger" role="alert">
                                No hay historial de provisiones
                            </div>
                        )
                    }
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