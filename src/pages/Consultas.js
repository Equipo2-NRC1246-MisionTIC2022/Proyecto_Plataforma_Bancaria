import { Link} from "react-router-dom";
import React, {Component} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup,Table,textarea, Button} from "react-bootstrap";
import { AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch }from "react-icons/ai";
  class Consultas extends React.Component {
    constructor() {
      super();
      this.state = {
        mostrar: [],
      };
  
    

    }
    render(){
      return(<body>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
  
          <div className="logo">
            <Link to="/index"><img src="assets_general/img/citi.png" alt="" className="img-fluid"/></Link>
            <a style={{fontWeight: "bold", paddingLeft: "30px", paddingTop: "10px"}}>Bienvenido Usuario X</a>
          </div>
  
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/index" className="nav-link scrollto">Inicio</Link></li>
              <li><Link to="/solicitudes" className="nav-link scrollto">Solicitudes</Link></li>
              <li><Link to="/consultas" className="nav-link scrollto active">Consultas</Link></li>
              <li><Link to="/simulacionpago"  className="nav-link scrollto">Simulación de pago</Link></li>
              <li><Link to="/contactenos" className="nav-link scrollto">Contactenos</Link></li>
              <li><Link to="/dashboard" className="nav-link scrollto">Dashboard</Link></li>
              <li><Link to="/" className="getstarted scrollto">Salir</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
  
        </div>
      </header>{/*<!-- End Header -->*/}
  
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
        <section id="contact" className="contact">
          <div className="container">
  
          <div className="row ">
          <div className="col-lg-4">
          </div>
  
          <div className="form-group col-lg-5">
            <input type="text" name="name" className="form-control" id="name" placeholder="Buscar codigo" required/>
            </div>
            <div className="form-group col-3">
            <h3><AiOutlineSearch /></h3>
            <br/><br/><br/>
            </div>
          </div>
          </div>
          <div className="row ">
          <div className="col-lg-3">
  
          </div>
          <div className="col-lg-2">
          <p>Codigo credito</p>
          </div>
  
          <div className="col-lg-1">
            <p>41231231</p>
            </div>
  
            <div className="col-lg-1">
            <p>142131312</p>
            </div>
            <div className="col-lg-1">
            <p>142131312</p>
            </div>
            <div className="col-lg-1">
            <p>142131312</p>
            </div>
            <div className="col-lg-3">
            <p>142131312</p>
            <br/>
            </div>
          <div className="col-lg-3">
  
          </div>
          <div className="col-lg-2">
          <p>valor total</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-3">
          <p>$$$</p>
          <br/>
          </div>
          <div className="col-lg-3">
  
          </div>
          <div className="col-lg-2">
          <p>Tiempo solicitado de cancelacion</p>
          </div>
          <div className="col-lg-1">
          <p>6 meses</p>
          </div>
          <div className="col-lg-1">
          <p>12 meses</p>
          </div>
          <div className="col-lg-1">
          <p>18 meses</p>
          </div>
          <div className="col-lg-1">
          <p>18 meses</p>
          </div>
          <div className="col-lg-3">
          <p>18 meses</p>
          <br/>
          </div>
          <div className="col-lg-3">
  
          </div>
          <div className="col-lg-2">
          <p>Monto deuda</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          <br/><br/>
          </div>
          <div className="row">
          <div className="col-lg-2">
  
          </div>
          <div className="col-lg-3">
          <div className="text-center"><Button variant="light" >Generar historial de pago</Button></div>
          </div>
          <div className="col-lg-3">
          <div className="text-center"><Button variant="light" >Generar certificados de pago</Button></div>
          </div>
          <div className="col-lg-4">
          <div className="text-center"><Button variant="light" > Solicitar Prorroga</Button></div>
          <br/><br/>
          </div>
          
          <div className="col-lg-6">

          </div>
          
          </div>
          </div>
  
          
        </section>{/* <!-- End Contact Section --> */}
      </main>{/* <!-- End #main --> */}
    </body>)
    }
}

export default Consultas;
