import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import React, { useState, useEffect } from "react";
import { PDFViewer } from '@react-pdf/renderer';

function Certificado() {
    const [Estado_prorr, setEstado_prorr] = useState("PRUEBA")
        
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
        <Text style={styles.text}>La División Nacional Sucursal Caribe de Citigroup Inc certifica que....
        EJEMPLO:En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos -- {Estado_prorr} --y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad</Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
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
