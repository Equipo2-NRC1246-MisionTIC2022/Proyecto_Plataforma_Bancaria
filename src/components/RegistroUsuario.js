import { Link} from "react-router-dom";
function RegistroUsuario() {
  return (
  <body>
    <main id="main" style={{backgroundColor: "#f6f9ff"}}> 
    <div class="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets_general/img/Citibank.png" alt="" style={{width:"100px"}}/>
                  
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Crear una cuenta</h5>
                    <p className="text-center small">Ingrese los siguientes datos para crear su cuenta</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="col-12">
                      <label for="yourName" class="form-label">Nombre completo</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div className="invalid-feedback">¡Por favor introduzca su nombre!</div>
                    </div>

                    <div className="col-12">
                      <label for="yourID" class="form-label">Tipo de documento de identidad</label>
                      <input type="text" name="text" class="form-control" id="yourID" required/>
                      <div className="invalid-feedback">¡Por favor inregres un tipo de documento de identidad!</div>
                    </div>

                    <div className="col-12">
                      <label for="yourUsername" class="form-label">Número de identificación</label>
                      <div className="input-group has-validation">
                        <input type="text" name="username" class="form-control" id="yourUsername" required/>
                        <div className="invalid-feedback">Por favor ingrese un numero de identificacion</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateBorn" class="form-label">Fecha de nacimiento</label>
                      <input type="date" name="dateborn" class="form-control" id="yourDateBorn" required/>
                      <div className="invalid-feedback">Ingrese su fecha de nacimiento</div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateExp" class="form-label">Fecha de expedicion del documento</label>
                      <input type="date" name="dateExp" class="form-control" id="yourDateExp" required/>
                      <div className="invalid-feedback">Ingrese su fecha de expedicion del documento</div>
                    </div>


                    <div className="col-12">
                      <label for="yourValueIng" class="form-label">Valor de ingresos</label>
                      <input type="number" name="valueIng" class="form-control" id="yourValueIng" required/>
                      <div className="invalid-feedback">Ingrese el valor de sus ingresos</div>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" class="form-label">Valor de egresos</label>
                      <input type="number" name="valueEg" class="form-control" id="yourValueEg" required/>
                      <div className="invalid-feedback">Ingrese el valor de sus egresos</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label className="form-check-label" for="acceptTerms">Yo acepto <a href="#"> los terminos y las condiciones</a></label>
                        <div className="invalid-feedback">Debe aceptar antes de enviar su información.</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <Link to="/index" button className="btn btn-primary w-100" type="submit">Crear cuenta</Link>
                    </div>
                    <div className="col-12">
                      <Link to="/login" className="small mb-0">¿Ya tiene una cuenta? <a >Ingrese</a></Link>
                    </div>
                  </form>

                </div>
              </div>

              <div className="credits">
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>


    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default RegistroUsuario;
