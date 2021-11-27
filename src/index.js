import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import Login from './components/Login';
import RegistroUsuario from './components/RegistroUsuario';
import Consultas from './components/Consultas';
import SimulacionPago from './components/SimulacionPago';
import Contactenos from './components/Contactenos';
import Solicitudes from './components/Solicitudes';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route path="/registro" element={<RegistroUsuario/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/index" element={<Principal/>} />
          <Route path="/consultas" element={<Consultas/>} />
          <Route path="/simulacionpago" element={<SimulacionPago/>} />
          <Route path="/contactenos" element={<Contactenos/>} />
          <Route path="/solicitudes" element={<Solicitudes/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


