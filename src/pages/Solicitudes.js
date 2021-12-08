import { Link} from "react-router-dom";
import React, {Component, useState} from "react";

import {Dropdown, DropdownButton, Form, FormControl,InputGroup,Table,textarea, Button} from "react-bootstrap";
import { AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch }  from "react-icons/ai";
  function Solicitudes(){
    const [Nombre, setNombre]=useState("");
    const [numbererror,setnumbererror]=useState(0);
    const Valor = (e)=>{
      const value=e.target.value;
      const empty=value.length==0
      const onlinum=/^[0-9\b]+$/g.test(value);
      console.log(empty)
      console.log(onlinum)
      if(empty){
        setnumbererror(1)
      }else if(!onlinum){
        setnumbererror(2)
      }

      if(!empty && onlinum){
        setnumbererror(0)
      }
      setNombre(value);
    }
  return(
    <body>
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
            <li><Link to="/solicitudes" className="nav-link scrollto active">Solicitudes</Link></li>
            <li><Link to="/consultas" className="nav-link scrollto">Consultas</Link></li>
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
            <h2>Solicitud de prestamo</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Solicitud de prestamo</li>
            </ol>
          </div>
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
  
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
        <form>
        <div className="row ">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-4">
        Nueva solicitud
        </div>
        </div>
          <div className="row">

          <div className="col-lg-4"></div>
            <div className=" col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Valor solicitado" onChange={Valor} required/>
                  {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==2)&&(<label>solo se permiten numeros</label>)

                       }
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Cuotas" onChange={Valor} required/>
                  {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==2)&&(<label>solo se permiten numeros</label>)

                       }
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Comentarios a agregar" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><Button variant="light" >Enviar Solicitud</Button></div>
              </form>
            </div>
  
          </div>
          </form>
        </div>
      </section>{/* <!-- End Contact Section --> */}
    </main>{/* <!-- End #main --> */}
    
  </body>)

  }
  
  
  


export default Solicitudes;