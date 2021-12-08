import { Link} from "react-router-dom";
import React,{useState} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup} from "react-bootstrap";
function RegistroUsuario() {
    const [Nombre, setNombre]=useState("");
    const [numbererror,setnumbererror]=useState(0);
    const nombre = (e)=>{
      const value=e.target.value;
      const empty=value.length==0
      const onlilet=/^[a-zA-Z ]*$/g.test(value);
      console.log(empty)
      console.log(onlilet)
      if(empty){
        setnumbererror(1)
      }else if(!onlilet){
        setnumbererror(2)
      }

      if(!empty && onlilet){
        setnumbererror(0)
      }
      setNombre(value);
    }

    const id = (e)=>{
      const value=e.target.value;
      const empty=value.length==0;
      const onlinum=/^[0-9\b]+$/g.test(value);
      const min=value.length!=10

      if(empty){
        setnumbererror(1)
      }else if(!onlinum){
        setnumbererror(3)
      }else if(min){
        setnumbererror(4)
      }else{
        setnumbererror(0)
      }
      const ingresos = (e)=>{
        const value=e.target.value;
        const empty=value.length==0;
        const onlinum=/^[0-9\b]+$/g.test(value);
        const min=value.length<3
        if(empty){
          setnumbererror(1)
        }else if(!onlinum){
          setnumbererror(3)
        }else if(min){
          setnumbererror(4)
        }else{
          setnumbererror(0)
        }
      }
        const egresos = (e)=>{
          const value=e.target.value;
          const empty=value.length==0;
          const onlinum=/^[0-9\b]+$/g.test(value);
          const min=value.length<3
          if(empty){
            setnumbererror(1)
          }else if(!onlinum){
            setnumbererror(3)
          }else if(min){
            setnumbererror(4)
          }else{
            setnumbererror(0)
          }
        }

    }

  return (
  <body>
    <main id="main" style={{backgroundColor: "#f6f9ff"}}> 
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
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
                      <label for="yourName" className="form-label">Nombre completo</label>
                      <input type="text" name="name" className="form-control" id="yourName" onChange={nombre} required/>
                      {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==2)&&(<label>Solo se permiten letras</label>)

                       }
                      <div className="invalid-feedback">¡Por favor introduzca su nombre!</div>
                    </div>

                    <div className="col-12 ">
                    <label for="yourName" className="form-label">Tipo de documento</label>
                    <Form.Select aria-label="Default select example">
                      <option value="1">Cedula ciudadana</option>
                      <option value="2">Cedula extranjera</option>
                      <option value="3">Rut</option>
                    </Form.Select>
                    </div>

                    <div className="col-12">
                      <label for="yourUsername" className="form-label">Número de identificación</label>
                      <div className="input-group has-validation">
                        <input type="text" name="username" className="form-control" id="yourUsername" onChange={id}  required/>
                        {
                        (numbererror==1)&&(<label >este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==3)&&(<label>Solo se permiten numeros</label>)

                       }
                       {
                        (numbererror==4)&&(<label>debe ser un total de 10 digitos</label>)

                       }
                        <div className="invalid-feedback">Por favor ingrese un numero de identificacion</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateBorn" className="form-label">Fecha de nacimiento</label>
                      <input type="date" name="dateborn" className="form-control" id="yourDateBorn" required/>
                      <div className="invalid-feedback">Ingrese su fecha de nacimiento</div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateExp" className="form-label">Fecha de expedicion del documento</label>
                      <input type="date" name="dateExp" className="form-control" id="yourDateExp" required/>
                      <div className="invalid-feedback">Ingrese su fecha de expedicion del documento</div>
                    </div>


                    <div className="col-12">
                      <label for="yourValueIng" className="form-label">Valor de ingresos</label>
                      <InputGroup className="mb-3" >
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.000</InputGroup.Text>
                    <FormControl aria-label="Dollar amount (with dot and three decimal places)" />
                  </InputGroup>
                  {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==3)&&(<label>Solo se permiten numeros</label>)

                       }
                       {
                        (numbererror==4)&&(<label>debe ser mayor a 3 digitos</label>)

                       }
                  
                      <div className="invalid-feedback">Ingrese el valor de sus ingresos</div>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" className="form-label">Valor de egresos</label>
                      <InputGroup className="mb-3" >
                    <InputGroup.Text >$</InputGroup.Text>
                    <InputGroup.Text>0.000</InputGroup.Text>
                    <FormControl aria-label="Dollar amount (with dot and three decimal places)" />
                  </InputGroup>
                  {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==3)&&(<label>Solo se permiten numeros</label>)

                       }
                       {
                        (numbererror==4)&&(<label>debe ser mayor a 3 digitos</label>)

                       }
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
