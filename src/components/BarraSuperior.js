import { Link} from "react-router-dom";
import React ,{useState,useEffect}from "react";
import {Button } from "react-bootstrap";

function BarraSuperior() {
    let [token, setToken] = useState('');
    let [usuario, setUsuario] = useState('');
    useEffect(() => {
      const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
      const token_storage = window.localStorage.getItem("token-jwt");
      if (token_storage) {
        token = token_storage;
        usuario=setUsuario(usuario_storage.nombre);
      } else {
        window.location.href="/";
      }
    }); 

  let cerrar_sesion = () => {
    window.localStorage.removeItem("token-jwt");
    window.localStorage.removeItem("usuario");
    window.location.href = '/'
  };
    return (
    <body>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
  
          <div className="logo">
            <Link to="/index"><img src="assets_general/img/citi.png" alt="" className="img-fluid"/></Link>
            <a style={{fontWeight: "bold", paddingLeft: "30px", paddingTop: "10px"}}>Bienvenido {usuario}</a>
          </div>
  
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/index" className="nav-link scrollto">Inicio</Link></li>
              <li><Link to="/solicitudes" className="nav-link scrollto">Solicitudes</Link></li>
              <li><Link to="/consultas" className="nav-link scrollto">Consultas</Link></li>
              <li><Link to="/simulacionpago"  className="nav-link scrollto">Simulación de pago</Link></li>
              <li><Link to="/contactenos" className="nav-link scrollto">Contactenos</Link></li>
              <li><Link to="/dashboard" className="nav-link scrollto">Dashboard</Link></li>
              <li><Button onClick={cerrar_sesion}className="getstarted scrollto">Salir</Button></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
  
        </div>
      </header>{/*<!-- End Header -->*/}
    </body>
    );
  }
  
  export default BarraSuperior;
  