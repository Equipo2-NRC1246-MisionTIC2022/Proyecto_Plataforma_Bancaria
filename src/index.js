import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './pages/Principal';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import RegistroUsuario from './pages/RegistroUsuario';
import Consultas from './pages/Consultas';
import SimulacionPago from './pages/SimulacionPago';
import Contactenos from './pages/Contactenos';
import Solicitudes from './pages/Solicitudes';
import Dashboard from './pages/Dashboard';
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


