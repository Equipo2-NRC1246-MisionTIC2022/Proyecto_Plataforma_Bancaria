import { Link} from "react-router-dom";
import React from "react";

function BarraSuperior() {
    return (
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
              <li><Link to="/solicitudes" className="nav-link scrollto">Solicitudes</Link></li>
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
    </body>
    );
  }
  
  export default BarraSuperior;
  