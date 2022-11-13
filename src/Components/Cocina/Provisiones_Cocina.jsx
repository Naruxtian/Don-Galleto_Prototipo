import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'

const Inicio = () => {
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
                    <button class='botonHistorial fs-5'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>Historial</button>
                </div>
            </div>
            <br />
            <br />
            <div class="row mx-auto">
                <div class="col-12">
                    <div class="col-6 divTamaño border border-dark">
                        <div class="form-check border border-dark">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                                Don Camerino - 4771234567
                            </label>
                        </div>
                        <div class="form-check border border-dark">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                                Don Peluche - 4771234567
                            </label>
                        </div>
                        <div class=" col-6">
                            <div class="divTamaño">
                                <label htmlFor="">Harina:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Azucar:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Huevo:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Natilla:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                            </div>
                            <div class="divTamaño2">
                                <label htmlFor="">Aceite:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Leche:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Avena:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                                <label htmlFor="">Pasas:</label>
                                <input type="number" class="inputTamaño" /> <br /> <br />
                            </div>
                        </div>
                        <div class="row mx-auto text-center btn-group btn-group-justified">
                            <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>Aceptar</button>
                        </div>
                    </div>

                    <div class=" col-6 mx-auto text-center divTamaño border border-dark">
                        <h4 class="fs-1">Provisión Manual</h4>
                        <div class="col-6">
                            <div class="col-3 divTamaño">
                                <select class="form-select selectTamaño" aria-label="Default select example">
                                    <option selected>Harina</option>
                                    <option value="1">Azucar</option>
                                    <option value="2">Huevo</option>
                                    <option value="3">Natilla</option>
                                </select>
                            </div>
                            <div class="col-3 divTamaño2">
                                <input type="number" class="inputTamaño2" /> <label htmlFor="">2kg</label>
                            </div> <br /> <br />
                            <label htmlFor="">Costo: $</label>
                            <input type="number" class="inputTamaño2" /> <br /> <br />
                            <label htmlFor="">Lugar:</label>
                            <input type="text" class="inputTamaño2" /> <br /> <br />
                        </div>
                        <div class="row mx-auto text-center btn-group btn-group-justified">
                            <button class='fs-4 btn btn-outline-sucess btn-success colorOscuro'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio