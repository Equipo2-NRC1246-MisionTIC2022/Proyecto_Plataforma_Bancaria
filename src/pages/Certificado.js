import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import React, { useState, useEffect } from "react";
import { PDFViewer } from '@react-pdf/renderer';

function Certificado() {
    const [Cuotas_pen, setCuotas_pen] = useState()
    const [Codigo, setCodigo] = useState()
    const [Cuotas_pagadas, setCuotas_pagadas] = useState()
    const [Cuota_capital, setCuota_capital] = useState()
    const [Cuota_total, setCuota_total] = useState()
    const [Interes, setInteres] = useState()

    var d = new Date();
    const [Dia,setDia]= useState(d.getDate())
    const [Mes,setMes]= useState(d.getMonth()+1)
    const [Año,setAño]= useState(d.getFullYear())

    useEffect(() => {

      const token_storage = window.localStorage.getItem("token-jwt");
      const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
      const codigo_consulta = JSON.parse(window.localStorage.getItem("codigo"))
      if (token_storage) {
        token = token_storage;
        usuario=usuario_storage;
        setCodigo(codigo_consulta)
        consultarSolicitud(); 
        
      } else {
        window.location.href="/";
      }
    });
    const [Id_user, setId_user] = useState(usuario.id)
    const [Nombre, setNombre] = useState(usuario.nombre)

    var h1=0
    const consultarSolicitud = () => {
      h1=Codigo
      fetch(`${process.env.REACT_APP_URL_BACKEND}/get_solicitud/${h1}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token-jwt": token
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setValor(response.valor);
          setTiempo(response.cuotas);
          setCuotas_pen(response.cuotas_pendientes);
          setCuotas_pagadas(response.cuotas_pagadas);
          setCuota_capital(response.cuota_capital);
          setInteres(response.interes);
          setCuota_total(response.cuota_capital+response.interes);
        })
        .catch((error) => console.error("Error:", error))
    };
        
    const styles = StyleSheet.create({
        body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        },
        title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
        },
        author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
        },
        subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
        },
        text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
        },
        image: {
        marginVertical: 15,
        marginHorizontal: 100,
        width:"150px",
        left:"90px",
        top:"-10px"
        },
        header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
        },
        pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
        },
    });



return (
    <>
    <Document>
    <Page size="LETTER" style={styles.body}>
      <View>

        <Image style={styles.image} src="assets_general/img/Citibank.png"
        />
      </View>
      <View>
        <Text style={styles.text}>La División Nacional Sucursal Caribe de Citigroup Inc certifica que {Nombre} identificado
        con número de identificación {Id_user} tiene en este banco registrado el crédito con código {Codigo} del cual
        tiene {Cuotas_pagadas} cuota(s) pagada(s) y {Cuotas_pen} cuota(s) pendiente(s) por pagar,
        teniendo en cuenta una valor de cuota de {Cuota_total}, lo cual contempla un valor de capital de ${Cuota_capital} pesos y un valor
        de intereses de ${Interes} pesos.</Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}>Dado en Barranquilla a los {Dia} dias del mes de {Mes} del año {Año}. </Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}>Citibank - Colombia S.A Citi // Citigroup Inc. Carrera 56B # 78 - 06 Medellin, Colombia</Text>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
    </Document>
    </>
  )
}


export default Certificado;
