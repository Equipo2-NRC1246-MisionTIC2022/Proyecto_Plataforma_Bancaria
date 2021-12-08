import { Link} from "react-router-dom";
import React, {Component} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup,Table,textarea, Button} from "react-bootstrap";
import { AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch }from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
  class Consultas extends React.Component {
    constructor() {
      super();
      this.state = {
        mostrar: [],
      };
  
    

    }
    render(){
      return(<body>
      <BarraSuperior/> 
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
      <BarraInferior/> 
    </body>)
    }
}

export default Consultas;
