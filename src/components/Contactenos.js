import { Link} from "react-router-dom";
function Contactenos() {
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
            <li><Link to="/contactenos" className="nav-link scrollto active">Contactenos</Link></li>
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
            <h2>Contactenos</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Contactenos</li>
            </ol>
          </div>
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
  
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
  
          <div className="section-title" data-aos="fade-up">
            <h2>Comunicate con nosotros</h2>
            <br/>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-about">
                <Link to="/index"><img src="assets_general/img/Citibank.png" alt="" className="img-fluid"/></Link>
                <br/><br/><br/>
                <p>Por definir</p>
                <div className="social-links">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
              <div className="info">
                <div>
                  <i className="ri-map-pin-line"></i>
                  <p>Ubicacion<br/>Detalles</p>
                </div>
  
                <div>
                  <i className="ri-mail-send-line"></i>
                  <p>email</p>
                </div>
  
                <div>
                  <i className="ri-phone-line"></i>
                  <p>telefono</p>
                </div>
  
              </div>
            </div>
  
            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Tu nombre" required/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Tu correo" required/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Enviar mensaje</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>{/* <!-- End Contact Section --> */}
    </main>{/* <!-- End #main --> */}
  </body>
  );
}

export default Contactenos;
