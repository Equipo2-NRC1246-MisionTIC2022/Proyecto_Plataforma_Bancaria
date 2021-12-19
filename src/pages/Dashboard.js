import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
import BarraDashboard from "../components/BarraDashboard";

function Dashboard() {
    let [token, setToken] = useState('');
    let [usuario, setUsuario] = useState('');
    let [id, setId] = useState('');
    let [fechaNaci, setFechaNaci] = useState('');
    let [ingresos, setIngresos] = useState('');
    let [egresos, setEgresos] = useState('');
    useEffect(() => {
      const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
      const token_storage = window.localStorage.getItem("token-jwt");
      if (token_storage) {
        token = token_storage;
        usuario=setUsuario(usuario_storage.nombre);
        id=setId(usuario_storage.id);
        fechaNaci=setFechaNaci(usuario_storage.nacimiento);
        ingresos=setIngresos(usuario_storage.ingresos);
        egresos=setEgresos(usuario_storage.egresos);
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
      <BarraDashboard/>
      {/* <!-- ======= Breadcrumbs Section ======= -->*/}
      <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2></h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Dashboard</li>
              </ol>
            </div>
          </div>
        </section>{/*<!-- End Breadcrumbs Section -->*/}
      {/*<!-- ======= Sidebar ======= -->*/}
      <aside id="sidebar" className="sidebar1" style={{top:"142px", position:"absolute", bottom:"-520px"}}>

        <ul className="sidebar-nav1" id="sidebar-nav1">

          
          <li className="nav-heading1">Pages</li>

          <li className="nav-item1">
            <Link to="/index" className="nav-link1 collapsed">
              <i className="bi bi-house"></i>
              <span>Inicio</span>
            </Link>
          </li>{/*<!-- End Profile Page Nav -->*/}

          <li className="nav-item1">
            <Link to="/solicitudes" className="nav-link1 collapsed">
              <i className="bi bi-cash-coin"></i>
              <span>Solicitudes</span>
            </Link>
          </li>{/*<!-- End F.A.Q Page Nav -->*/}

          <li className="nav-item1">
            <Link to="/pagos" className="nav-link1 collapsed">
              <i className="bi bi-currency-dollar"></i>
              <span>Pagos</span>
            </Link>
          </li>{/*<!-- End Contact Page Nav -->*/}

          <li className="nav-item1">
            <Link to="/consultas" className="nav-link1 collapsed">
              <i className="bi bi-search"></i>
              <span>Consultas</span>
            </Link>
          </li>{/*<!-- End Register Page Nav -->*/}

          <li className="nav-item1">
            <Link to="/simulacionpago" className="nav-link1 collapsed">
              <i className="bi bi-wallet2"></i>
              <span>Simulacion de pago</span>
            </Link>
          </li>{/*<!-- End Login Page Nav -->*/}

          <li className="nav-item1">
            <Link to="/contactenos" className="nav-link1 collapsed">
              <i className="bi bi-chat-dots"></i>
              <span>Contactenos</span>
            </Link>
          </li>{/*<!-- End Error 404 Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" onClick={cerrar_sesion}>
              <i className="bi bi-box-arrow-left"></i>
              <span>Cerrar sesión</span>
            </a>
          </li>{/*<!-- End Blank Page Nav -->*/}

        </ul>

      </aside>{/*<!-- End Sidebar-->*/}

      <main id="main1" className="main">

        <div className="pagetitle" data-aos="fade-up">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/*<!-- End Page Title -->*/}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">

              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                  <img src="assets_general/img/profile-img.png" alt="Profile" className="rounded-circle"/>
                  <h2>{usuario}</h2>
                  <h3 style={{fontStyle: "italic"}}>Cliente Citybank</h3>
                  <h4>ID.{id}</h4>
                </div>
              </div>

            </div>

            <div className="col-xl-8">

              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">

                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">General</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                    </li>

                  </ul>
                  <div className="tab-content pt-2">

                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title" style={{fontStyle: "italic"}}>Detalles de perfil</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label " style={{fontWeight: "bold"}}>Nombre</div>
                        <div className="col-lg-9 col-md-8">{usuario}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>ID</div>
                        <div className="col-lg-9 col-md-8">{id}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Fecha de nacimiento</div>
                        <div className="col-lg-9 col-md-8">{fechaNaci}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Ingresos</div>
                        <div className="col-lg-9 col-md-8">{ingresos}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Egresos</div>
                        <div className="col-lg-9 col-md-8">{egresos}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Rol</div>
                        <div className="col-lg-9 col-md-8">Cliente Citybank</div>
                      </div>
                    </div>

                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                      <form>
                        <div className="row mb-3">
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                          <div className="col-md-8 col-lg-9">
                            <textarea name="about" className="form-control" id="about" style={{height: "100px"}}>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="job" type="text" className="form-control" id="Job" value="Web Designer"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="country" type="text" className="form-control" id="Country" value="USA"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="address" type="text" className="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="twitter" type="text" className="form-control" id="Twitter" value="https://twitter.com/#"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="facebook" type="text" className="form-control" id="Facebook" value="https://facebook.com/#"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="instagram" type="text" className="form-control" id="Instagram" value="https://instagram.com/#"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="linkedin" type="text" className="form-control" id="Linkedin" value="https://linkedin.com/#"/>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Save Changes</button>
                        </div>
                      </form>

                    </div>

                    <div className="tab-pane fade pt-3" id="profile-change-password">
                      <form>

                        <div className="row mb-3">
                          <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="password" type="password" className="form-control" id="currentPassword"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="newpassword" type="password" className="form-control" id="newPassword"/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="renewpassword" type="password" className="form-control" id="renewPassword"/>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Change Password</button>
                        </div>
                      </form>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <div>
          <img src="assets_general/img/container.png"/>
        </div>
      </main>{/*<!-- End #main -->*/}
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </body>
  );
}

export default Dashboard;
