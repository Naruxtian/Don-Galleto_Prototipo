import * as React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Inventario = () => {
  const [merma, setMerma] = React.useState(false);
  const [galletas, setGalletas] = React.useState([]);
  let listMermas = [];

  const obtenerGalletas = () => {
    let galletas = [];
    galletas = JSON.parse(localStorage.getItem("galletas"));

    setGalletas(galletas);
  };

  const mermarGalleta = (nombre, merma) => {
    const MySwal = withReactContent(Swal);
    
    let galletas = [];
    galletas = JSON.parse(localStorage.getItem("galletas"));
    galletas.forEach(galleta => {
        if (galleta.Nombre === nombre) {
            if (merma >= 0) {
                if (galleta.Cantidad >= merma) {
                    galleta.Cantidad = galleta.Cantidad - merma;
                    Swal.fire({
                        icon: "success",
                        title: "Galleta mermada",
                        text: "Se realizó la merma de la galleta correctamente",
                    });
                } else {
                    MySwal.fire({
                        title: <strong>Error</strong>,
                        html: <i>No puedes mermar mas galleta de la que hay en inventario</i>,
                        icon: "error",
                    });
                }
            } else {
                MySwal.fire({
                    title: <strong>Error</strong>,
                    html: <i>La merma no puede ser un numero negativo</i>,
                    icon: "error",
                });
            }
        }
    });
    localStorage.setItem("galletas", JSON.stringify(galletas));
    obtenerGalletas();
    };

  React.useEffect(() => {
    obtenerGalletas();
  }, []);

  const calculateAlert = (Cantidad) => {
    let alert = "";

    if(Cantidad >= 150){
        alert = "cardGalleta fs-4 btn colorOscuro galletaBien";
    }else if(Cantidad > 50 && Cantidad < 150){
        alert = "cardGalleta fs-4 btn colorOscuro galletaAlerta";
    }else{
        alert = "cardGalleta fs-4 btn colorOscuro galletaPoco";
    }
    return alert;
}

  return (
    <div class="container">
      <div class="row mx-auto">
        <div class="col-1">
          <Link to={"/Venta"}>
            <button class="botonRegresar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-back"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
              </svg>
            </button>
          </Link>
        </div>
        <div class="col-8">
          <h1 class="fs-1">INVENTARIO DE GALLETAS</h1>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="row mx-auto text-center btn-group btn-group-justified">

        {
            merma ? (

                galletas.map((galleta) => {
                    const alert = calculateAlert(galleta.Cantidad);
                    let merm=0;
                    return (
                      <div
                        class={alert}
                      >
                        <p>{galleta.Nombre}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-cookie"
                          width="75"
                          height="75"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M8 13v.01"></path>
                          <path d="M12 17v.01"></path>
                          <path d="M12 12v.01"></path>
                          <path d="M16 14v.01"></path>
                          <path d="M11 8v.01"></path>
                          <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                        </svg>
                        <br />
                        {galleta.Cantidad}
                        <br/>
                        <input class="inputMermaGalleta" type="number" min="0"
                        onChange={(e) => {merm = e.target.value}}></input>
                                        <button class="botonBasura" 
                                        onClick={() => {mermarGalleta(galleta.Nombre, merm)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></button>
                      </div>
                    );
                  })

            ) : (
                
                galletas.map((galleta) => {
                  const alert = calculateAlert(galleta.Cantidad);
                    return (
                      <div
                        class={alert}
                      >
                        <p>{galleta.Nombre}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-cookie"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M8 13v.01"></path>
                          <path d="M12 17v.01"></path>
                          <path d="M12 12v.01"></path>
                          <path d="M16 14v.01"></path>
                          <path d="M11 8v.01"></path>
                          <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
                        </svg>
                        <br />
                        {galleta.Cantidad}
                      </div>
                    );
                  })

            )
        }

          
        </div>
            <div class="col-12 merma">
                <br/>
                {
                    merma ? (
                        <button class='botonAceptarMermar btn btn-success' onClick={() => setMerma(false)}>Terminar 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                        </button>
                    ) : (
                        <button class='botonMermar' onClick={() => setMerma(true)}>Mermar
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                        </button>
                    )
                }

            </div>
       
      </div>
    </div>
  );
};

export default Inventario;
