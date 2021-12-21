import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Certificado from './Certificado';


// Create Document Component
const Paginarender = () => (
<div style={{minHeight:"100hv"}}>
    <PDFViewer style={{width:"100%", height:"100vh"}}>
        <Certificado />
    </PDFViewer>
</div>
);

export default Paginarender;
