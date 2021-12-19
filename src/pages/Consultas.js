import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button } from "react-bootstrap";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch
} from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";

function Consultas() {

  let [token, setToken] = useState('');
  let [sw, setSw] = useState(true);
  useEffect(() => {

    const token_storage = window.localStorage.getItem("token-jwt");
    if (token_storage) {
      token = token_storage;
    } else {
      window.location.href="/";
    }
  });

  const [Estado, setEstado] = useState("hidden")
  const [Fondo, setFondo] = useState("assets_general/img/container.png")
  const [Valor, setValor] = useState([])
  const [Tiempo, setTiempo] = useState([])
  const [Codigo, setCodigo] = useState()

  const cambiarEstado = () => {
    setEstado("visible")
    setFondo(" ")
  };

  const ocultarFormulario = () => {
    setEstado("hidden")
    setFondo("assets_general/img/container.png")
  };

  const establecerCodigo= () => {
    var codigo=document.getElementById("id_user").value
    setCodigo(codigo)
  };
  var h1=0
  const consultarSolicitud = () => {
    h1=document.getElementById("id_user").value
    fetch(`http://localhost:8000/api/get_solicitud/${h1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
          if(response.mensaje==undefined){
            establecerCodigo()
            setValor(response.valor);
            setTiempo(response.cuotas);
          }else{
            alert(response.mensaje)
            setValor(" ");
            setTiempo(" ");
            setCodigo(" ")
          }
          })
        
      .catch((error) => console.error("Error:", error))
  };

  return (
    <body>
      <BarraSuperior />
      <main id="main">

        {/* <!-- ======= Breadcrumbs Section ======= -->*/}
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Consultas</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Consultas</li>
              </ol>
            </div>
          </div>
        </section>{/*<!-- End Breadcrumbs Section -->*/}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="subcontainer">
              <div className="portfolio-info">
                <form className="row">
                  <div className="col-sm-2" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <p>Codigo crédito</p>
                  </div>
                  <div className="col-sm-8">
                    <input type="number" name="id_user" className="form-control" id="id_user" placeholder="Buscar codigo" required />
                  </div>
                  <div className="col-sm-1" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <h3><AiOutlineSearch onClick={consultarSolicitud}/></h3>
                  </div>
                </form>
              </div>
            </div>
            <br />
            <div className="portfolio-info">


              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Codigo credito</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Codigo} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Valor total</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Valor} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Tiempo solicitado de cancelación</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Tiempo} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Monto deuda</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Valor} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2">

                </div>

                <div className="col-lg-3">
                  <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light">Generar historial de pago</Button></div>
                </div>
                <div className="col-lg-3">
                  <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light" >Generar certificados de pago</Button></div>
                </div>
                <div className="col-lg-3">
                  <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light" onClick={cambiarEstado} > Solicitar Prorroga</Button></div>
                  <br /><br />
                </div>
                <br /><br />

              </div>
            </div>
          </div>

          <form>
            <div className="container" style={{ backgroundImage: "url(" + Fondo + ")" }}>
              <div className="portfolio-info">
                <div className="row " style={{ visibility: Estado }}>

                  <div className="col-sm-5" style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold" }}>Razón</p>
                  </div>
                  <div className="col-sm-7" style={{ textAlign: "left" }}>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Estado} readOnly />
                    <br />
                  </div>
                </div>

                <div className="row " style={{ visibility: Estado }}>

                  <div className="col-sm-5" style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold" }}>Cantidad de cuotas</p>
                  </div>
                  <div className="col-sm-7" style={{ textAlign: "left" }}>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Estado} readOnly />
                    <br />
                  </div>
                </div>

                <div className="row " style={{ visibility: Estado }}>

                  <div className="col-sm-12" style={{ textAlign: "center" }}>
                    <p style={{ fontStyle: "italic" }}>Esta cantidad de cuotas no podrá ser mayor al 25% de la cantidad de cuotas restantes. El máximo de cuotas que se permite aplazar es de 6.</p>
                    <br />
                  </div>
                </div>
                <div className="row" style={{ visibility: Estado }}>
                  <div className="col-lg-2">
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light" >Confirmar</Button></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light" onClick={ocultarFormulario}>Cancelar</Button></div>
                    <br /><br />
                  </div>
                  <br /><br />

                </div>
              </div>
            </div>
          </form>

        </section>{/* <!-- End Contact Section --> */}
      </main>{/* <!-- End #main --> */}
      <BarraInferior />
    </body>
  )
}

export default Consultas;
