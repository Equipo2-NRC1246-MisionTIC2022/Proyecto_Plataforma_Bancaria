import { Link} from "react-router-dom";
import React, {Component, useState} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup,Table,textarea, Button} from "react-bootstrap";
import { AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch }from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
  function SimulacionPago() {
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
        <form>
          <div className="container">
          
          <div className="row ">
          
          <div className="col-lg-4">
          </div>
  
          <div className="form-group col-lg-4">
            <input type="text" name="name" className="form-control" id="name" placeholder="Buscar codigo" required/>
            </div>
            <div className="form-group col-4">
            <h3><AiOutlineSearch /></h3>
            <br/><br/><br/>
            </div>
          </div>
          </div>
          <div className="row ">
          <div className="col-lg-4">
  
          </div>
          <div className="col-lg-1">
          <p>Codigo credito</p>
          </div>
  
          <div className="col-lg-1">
            <p>41231231</p>
            </div>
  
            <div className="col-lg-1">
            <p>142131312</p>
            </div>
            <div className="col-lg-5">
            <p>142131312</p>
            <br/>
            </div>
          <div className="col-lg-4">
  
          </div>
          <div className="col-lg-1">
          <p>Monto deuda</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-1">
          <p>$$$</p>
          </div>
          <div className="col-lg-4">
          <p>$$$</p>
          <br/>
          </div>
  
          <div className=" col-lg-4">
          </div>
       
  
          <div className=" col-lg-4">
          <input type="text" name="name" className="form-control" id="name" placeholder="Valor Cuota" onChange={Valor} required/>
          {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==2)&&(<label>solo se permiten numeros</label>)

                       }
          <br/>
          </div>
      
          <div className=" col-lg-3">
          </div>
  
          <div className=" col-lg-4">
  
          </div>
  
          <div className="form-group col-lg-4">
          <input type="text" name="name" className="form-control" id="name" placeholder="Numero de cuotas" onChange={Valor} required/>
          {
                        (numbererror==1)&&(<label>este campo es obligatorio</label>)

                       }
                       {
                        (numbererror==2)&&(<label>solo se permiten numeros</label>)

                       }
          <br/><br/>
          </div>
          </div>
                  
   
   
          
          <div className="row">
          <div className="col-lg-5">
  
          </div>
        
          <div className="col-lg-2">
          <div className="text-center"><Button variant="light" >Realizar pago</Button></div>
          </div>
          
          </div> 
          </form> 
          
        </section>{/* <!-- End Contact Section --> */}
      </main>{/* <!-- End #main --> */}
      <BarraInferior/>  
    </body>)
    
  }


export default SimulacionPago;