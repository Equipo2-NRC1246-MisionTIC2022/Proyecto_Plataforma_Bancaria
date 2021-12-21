import React, { useState, useEffect } from "react";
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
import Pagos from "./pages/Pagos";
import Paginarender from "./pages/Paginarender";
import DespliegueCertificado from "./pages/DespliegueCertificado";
import Dashboardinterno from "./pages/Dashboardinterno";
import Solicitudesprorroga from "./pages/Solictudesprorroga";
import Prestamo from "./pages/Prestamo";

const App = () => {

  let [token, setToken] = useState("");
  let [usuario, setUsuario] = useState({});
  let [sw, setSw] = useState(true);

  useEffect(() => {
    console.log(process.env);
    const token_storage = window.localStorage.getItem("token-jwt");
    const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"));
    if (token_storage && usuario_storage) {
      if (sw) {
        setToken(token_storage);
        setUsuario(usuario_storage);
        setSw(false);
      }
    } else {

        setToken(undefined);
        setUsuario(undefined);

    }
  });

  const datos_inicio_sesion = (datos) => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/login`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        window.localStorage.setItem("token-jwt", response.token);

        window.localStorage.setItem(
          "usuario",
          JSON.stringify(response.usuario)
        );

        alert(response.mensaje);
        setToken(response.token);
        setUsuario(response.usuario);
        if (response.usuario.rol === "Admin") {
          window.location.href ="/dashboard";
        } else {
            window.location.href = "/index";
        }
      })
      .catch((error) => console.error("Error:", error));
  };






  return (
    <div>
    <React.StrictMode>
        <Router>
        <Routes>
            <Route exact path="/" element={<Inicio/>} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/login" element={<Login recibir={datos_inicio_sesion} />} />
            <Route path="/index" element={<Principal/>} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/pagos" element={<Pagos/>} />
            <Route path="/simulacionpago" element={<SimulacionPago/>} />
            <Route path="/contactenos" element={<Contactenos/>} />
            <Route path="/solicitudes" element={<Solicitudes/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/certificadocredito" element={<DespliegueCertificado/>} />
            <Route path="/dashboardint" element={<Dashboardinterno/>} />
            <Route path="/Solicitudp" element={<Solicitudesprorroga/>} />
            <Route path="/prestamo" element={<Prestamo />} />
        </Routes>
        </Router>
    </React.StrictMode>,
    </div>
  );
};

export default App;