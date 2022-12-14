import React from 'react'
import { Link } from "react-router-dom";
import donGalleto from '../assets/don_Galleto.png'
import '../App.css'

const Inicio = () => {

  const inicializarDatos = () => {
    
    localStorage.setItem("galletas",JSON.stringify([
      {Nombre: "Canela", Cantidad: 200, PrecioPaquete: 50, PrecioUnidad: 10, PrecioPeso: 25, cocinadas:200, vendidas: 120, mermadas: 0, insumos: 50},
      {Nombre: "Mantequilla", Cantidad: 140, PrecioPaquete: 50, PrecioUnidad: 10, PrecioPeso: 25, cocinadas:140, vendidas: 60, mermadas: 0, insumos: 50},
      {Nombre: "Chocolate", Cantidad: 100, PrecioPaquete: 50, PrecioUnidad: 15, PrecioPeso: 25, cocinadas:100, vendidas: 85, mermadas: 0, insumos: 25},
      {Nombre: "Pasas y avena", Cantidad: 200, PrecioPaquete: 50, PrecioUnidad: 10, PrecioPeso: 25, cocinadas:200, vendidas: 100, mermadas: 0, insumos: 30},
      {Nombre: "Rellena de naranja", Cantidad: 150, PrecioPaquete: 50, PrecioUnidad: 15, PrecioPeso: 25, cocinadas:150, vendidas: 75, mermadas: 0, insumos: 40},
      {Nombre: "Integral", Cantidad: 200, PrecioPaquete: 50, PrecioUnidad: 10, PrecioPeso: 25, cocinadas:200, vendidas: 80, mermadas: 0, insumos: 60},
      {Nombre: "Mantequilla con fresa", Cantidad: 30, PrecioPaquete: 50, PrecioUnidad: 10, PrecioPeso: 25, cocinadas:30, vendidas: 170, mermadas: 0, insumos: 55},
      {Nombre: "Chocolate con nueces", Cantidad: 40, PrecioPaquete: 50, PrecioUnidad: 15, PrecioPeso: 25, cocinadas:40, vendidas: 160, mermadas: 0, insumos: 30},
      {Nombre: "Chocolate sin gluten", Cantidad: 200, PrecioPaquete: 50, PrecioUnidad: 20, PrecioPeso: 25, cocinadas:200, vendidas: 120, mermadas: 0, insumos: 80},
      {Nombre: "Rellena de natilla", Cantidad: 140, PrecioPaquete: 50, PrecioUnidad: 15, PrecioPeso: 25, cocinadas:140, vendidas: 60, mermadas: 0, insumos: 50},
    ]))

    localStorage.setItem("carrito",JSON.stringify([{Nombre:"Canela",
      Cantidad: 2,
      Medida: "pz",
      Costo: 100}]))
    
      localStorage.setItem("ventas",JSON.stringify([{Nombre:"Canela",
      Cantidad: 2,
      Medida: "pz",
      Costo: 100,Fecha:"2021-05-01"}]))

    localStorage.setItem("productos",JSON.stringify([
      {Nombre: "Harina", Cantidad: 30, Cuantidad:"Kg"},
      {Nombre: "Leche", Cantidad: 12, Cuantidad:"L"},
      {Nombre: "Huevo", Cantidad: 25, Cuantidad:"Kg"},
      {Nombre: "Aceite", Cantidad: 15, Cuantidad:"L"},
      {Nombre: "Chocolate", Cantidad: 8, Cuantidad:"Kg"},
      {Nombre: "Pasas", Cantidad: 11, Cuantidad:"Kg"},
      {Nombre: "Avena", Cantidad: 15, Cuantidad:"Kg"},
      {Nombre: "Mermelada", Cantidad: 10, Cuantidad:"Kg"},
      {Nombre: "Azucar", Cantidad: 10, Cuantidad:"Kg"},
      {Nombre: "Mantequilla", Cantidad: 13, Cuantidad:"Kg"},
    ]))

    localStorage.removeItem("provisiones")

    console.log("Datos Inicializados")
  }

  return (
    <div class="container">
      <div class="row mx-auto text-center">
        <h1 class="fs-1">DON GALLETO</h1>
      </div>
      <br />
      <br />
      <div class="row mx-auto">
        <div class="col-4">
          <h2>PUNTO DE VENTA</h2>
          <Link to={"/Venta"}><button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg></button></Link>
        </div>
        <div class="col-4">
          <img src={donGalleto} class="img-fluid logo" alt="Don Galleto" />
        </div>

        <div class="col-4">
          <h2>COCINA</h2>
          <Link to={"/Cocina"}><button class='botonSeccion'><svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-chef-hat" width="200" height="200" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4.002 4.002 0 1 1 2.092 -7.723a3.999 3.999 0 0 1 3.908 -3.151z"></path>
            <path d="M6.161 17.009l11.839 -.009"></path>
          </svg></button></Link>
        </div>
      </div>
      <button onClick={() => {inicializarDatos()}}></button>
    </div>
  )
}

export default Inicio