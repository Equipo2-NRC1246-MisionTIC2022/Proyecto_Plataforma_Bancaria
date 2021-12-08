import { Link} from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
function Principal() {
  return (
  <body>
    <BarraSuperior/> 
    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex align-items-center">
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Una misión para permitir el crecimiento y el progreso económico</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">Aunque somos un banco global, nuestra misión es sencilla: Proporcionamos responsablemente servicios financieros que permiten el crecimiento y el progreso económico</h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <Link to="/solicitudes" className="btn-get-started scrollto">Comienza tu solicitud de crédito</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
            <img src="assets_general/img/undraw_wallet_aym5.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
  
    </section>{/* <!-- End Hero --> */}
  
    <main id="main">
  
      {/* <!-- ======= Clients Section ======= --> */}
      <section id="clients" className="clients clients">
        <div className="container">
  
          <div className="row">
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets_general/img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
            </div>
  
          </div>
  
        </div>
      </section>{/* <!-- End Clients Section --> */}
    </main>{/* <!-- End #main --> */}
    <BarraInferior/> 
  </body>
  );
}

export default Principal;
