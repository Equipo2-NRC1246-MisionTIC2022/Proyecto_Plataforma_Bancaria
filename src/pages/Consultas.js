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
  const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
  const [Estado, setEstado] = useState("hidden")
  const [Fondo, setFondo] = useState("assets_general/img/container.png")
  const [Valor, setValor] = useState([])
  const [Tiempo, setTiempo] = useState([])
  const [Cuotas_pen, setCuotas_pen] = useState()
  const [Codigo, setCodigo] = useState()
  const [Estado_sol, setEstado_sol] = useState()
  const [Id_user, setId_user] = useState(usuario_storage.id)
  const [Cuotas_pagadas, setCuotas_pagadas] = useState()
  const [Prorr, setProrr] = useState()
  const [Cuotas_prorroga, setCuotas_prorroga] = useState()
  const [Cuota_capital, setCuota_capital] = useState()
  const [Cuota_total, setCuota_total] = useState()
  const [Interes, setInteres] = useState()
  const [Estado_prorr, setEstado_prorr] = useState()

  const cambiarEstado = () => {
    if(Codigo==undefined || Codigo==0){
      alert("Debe buscar el credito sobre el que desea hacer la solicitud de Prorroga.")
      ocultarFormulario();
    }else{
      setEstado("visible")
      setFondo(" ")
    }
  };

  const ocultarFormulario = () => {
    setEstado("hidden")
    setFondo("assets_general/img/container.png")
  };

  const establecerCodigo= () => {
    var codigo=document.getElementById("id_solicitud").value
    setCodigo(codigo)
  };
  var h1=0
  const consultarSolicitud = () => {
    h1=document.getElementById("id_solicitud").value
    fetch(`${process.env.REACT_APP_URL_BACKEND}/get_solicitud/${h1}`, {
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
            setCuotas_pen(response.cuotas_pendientes);
            if(response.estado_solicitud==0){
              setEstado_sol("En estudio");
            }else if(response.estado_solicitud==1){
              setEstado_sol("Rechazado");
            }else if(response.estado_solicitud==2){
              setEstado_sol("Aprobado");
            }
            setCuotas_pagadas(response.cuotas_pagadas);
            if(response.prorroga==true){
              setProrr(response.cuotas_prorroga);
              if(response.estado_prorroga==0){
                setEstado_prorr("En estudio");
              }else if(response.estado_prorroga==1){
                setEstado_prorr("Rechazado");
              }else if(response.estado_prorroga==2){
                setEstado_prorr("Aprobado");
              }
            }else{
              setProrr("No aplica");
              setEstado_prorr("No aplica");
            }
            setCuota_capital(response.cuota_capital);
            setInteres(response.interes);
            setCuota_total(response.cuota_capital+response.interes);

          }else{
            alert(response.mensaje)
            ocultarFormulario();
            setValor(" ");
            setTiempo(" ");
            setCodigo(" ")
            setCuotas_pen(" ");
            setEstado_sol("");
            setCuotas_pagadas(" ");
            setProrr(" ");
            setEstado_prorr(" ");
            setCuota_capital(" ");
            setInteres(" ");
            setCuota_total(" ");
          }
          })
        
      .catch((error) => console.error("Error:", error))
  };

  const Prorroga = (e) => {
    var h1="",h2="", h3="", h4="", h5=""
    var Error=0
  e.preventDefault();

  const prorroga = {
    prorroga: true,
    razon_prorroga: document.getElementById("razon_prorroga").value,
    cuotas_prorroga: document.getElementById("cuotas_prorroga").value
  };


  const registrarProrroga = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_solicitud/${Codigo}`, {
      method: "PUT",
      body: JSON.stringify(prorroga),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        window.location.href="/consultas"
      })
      .catch((error) => console.error("Error:", error));
  };

  
  //validacion solicitado completo
  //+
  //Solo letras
  const valor=/^[a-zA-Z ]*$/g.test(prorroga.razon_prorroga);
  if( !valor){
    Error=1
    h1="Razon: No se permiten numeros"
    
  }
  const cuota=/^[0-9\b]+$/g.test(prorroga.cuotas_prorroga);
  if(!cuota){
    Error=1
    h2="Cuotas: Se permiten solo numeros"
    
  }
  if(Estado_sol==0||Estado_sol==1||Estado_sol==undefined ){
    Error=1
    h3="Estado: El crédito aun no ha sido aprobado."
    
  }
  var calculo=((25*Cuotas_pen)/100);
  if(prorroga.cuotas_prorroga>calculo){
    Error=1
    h4=`Cuotas: Recuerde que la cantidad de cuotas no podrá ser mayor al 25% de la cantidad de cuotas restantes, que en este momento representa ${calculo} cuotas. Ponganse en contacto con el banco si desea mas información.`
  }
  if(prorroga.cuotas_prorroga>6){
    Error=1
    h5="Cuotas: Recuerde que el máximo de cuotas a aplazar son 6."
    
  }
  
  if(Error == 0){ 
    registrarProrroga();
    
  }else if (Error == 1 ){
      alert(`Corrija los siguientes errores para poder registrar su solicitud correcta:\n${h1}\n\n${h2}\n\n${h3}\n\n${h4}\n\n${h5}`);
  }

}

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
                <li><Link to="/index">Home</Link></li>
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
                    <input type="text" name="id_solicitud" className="form-control" id="id_solicitud" placeholder="Buscar codigo" required />
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
                  <p style={{ fontWeight: "bold" }}>Valor total solicitado</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Valor} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Tiempo solicitado de cancelación (meses)</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Tiempo} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Estado de solicitud de credito</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Estado_sol} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Prorroga solicitada (meses)</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Prorr} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Estado de estudio de prorroga añadida, si aplica</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Estado_prorr} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuotas pagadas</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Cuotas_pagadas} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuotas pendientes</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Cuotas_pen} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuota capital</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Cuota_capital} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Interes</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Interes} readOnly />
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuota total (capital+interes)</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" value={Cuota_total} readOnly />
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
                    <input type="text" name="razon_prorroga" className="form-control" id="razon_prorroga" placeholder="Razon"/>
                    <br />
                  </div>
                </div>

                <div className="row " style={{ visibility: Estado }}>

                  <div className="col-sm-5" style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold" }}>Cantidad de cuotas</p>
                  </div>
                  <div className="col-sm-7" style={{ textAlign: "left" }}>
                    <input type="name" name="cuotas_prorroga" className="form-control" id="cuotas_prorroga" placeholder="Razon"/>
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
                    <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}><Button variant="light" onClick={Prorroga} >Confirmar</Button></div>
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
