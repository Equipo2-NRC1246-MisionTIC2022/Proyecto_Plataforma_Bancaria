import { Link} from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";

function Dashboard() {
  return (
  <body>
    <BarraSuperior/>
     {/* <!-- ======= Breadcrumbs Section ======= -->*/}
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Dashboard</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Dashboard</li>
            </ol>
          </div>
          <nav id="navbar1" className="navbar1">
            <ul>
              <li><a className="nav-link scrollto " href="#hero">Opcion 1</a></li>
              <li><a className="nav-link scrollto" href="#about">Opcion 2</a></li>
              <li><a className="nav-link scrollto" href="#services">Opcion 3</a></li>
            </ul>
            <i className="bi bi-list mobile1-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <BarraInferior/>
  </body>
  );
}

export default Dashboard;
