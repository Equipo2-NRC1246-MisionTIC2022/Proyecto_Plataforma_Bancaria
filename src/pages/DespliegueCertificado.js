import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button } from "react-bootstrap";
import { PDFViewer } from '@react-pdf/renderer';
import Paginarender from "./Paginarender";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch
} from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";

function DespliegueCertificado() {
    const cod = window.localStorage.getItem("codigo");
    var d = new Date();
    const [Dia,setDia]= useState(d.getDate())
    const [Mes,setMes]= useState(d.getMonth())
    const [Año,setAño]= useState(d.getFullYear())
    const [Codigo, setCodigo] = useState(cod)
    const solicitud = JSON.parse(window.localStorage.getItem("certificado"))
    const [Cuotas_pen, setCuotas_pen] = useState(solicitud.cuotas_pendientes)
    const [Cuotas_pagadas, setCuotas_pagadas] = useState(solicitud.cuotas_pagadas)
    const [Cuota_capital, setCuota_capital] = useState(solicitud.cuota_capital)
    const [Cuota_total, setCuota_total] = useState(solicitud.cuota_capital+solicitud.interes)
    const [Interes, setInteres] = useState(solicitud.interes)
    const [Id_user, setId_user] = useState()
    const [Nombre, setNombre] = useState()
    let [token, setToken] = useState('');
    let [usuario, setUsuario] = useState('');
    
    useEffect(() => {
        const token_storage = window.localStorage.getItem("token-jwt");
        
        if (token_storage) {
          token = token_storage;
        } else {
          window.location.href="/";
        }
      });
      

  return (
    <body>
      <BarraSuperior />
      <main id="main">
        {/* <!-- ======= Breadcrumbs Section ======= -->*/}
        <section>
        <Paginarender nombre={Nombre} id_user={Id_user} codigo={Codigo} cuotas_pen={Cuotas_pen} cuotas_pag={Cuotas_pagadas} cuota_cap={Cuota_capital} interes={Interes} cuota_total={Cuota_total} dia={Dia} mes={Mes} año={Año}/>
        </section>{/* <!-- End Contact Section --> */}
      </main>{/* <!-- End #main --> */}
      <BarraInferior />
    </body>
  )
}



export default DespliegueCertificado;
