import React, { useState } from "react";
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

const App = () => {
  const [token, setToken] = useState("");
  const [usuario, setUsuario] = useState({});

  const datos_inicio_sesion = (datos, nav) => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        setToken(response.token);
        setUsuario(response.usuario);
        if (response.usuario.rol === "Admin") {
          nav("/dashboard");
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
            <Route path="/registro" element={<RegistroUsuario/>} />
            <Route path="/login" element={<Login recibir={datos_inicio_sesion} />} />
            <Route path="/index" element={<Principal token={token} />} />
            <Route path="/consultas" element={<Consultas token={token}/>} />
            <Route path="/simulacionpago" element={<SimulacionPago/>} />
            <Route path="/contactenos" element={<Contactenos/>} />
            <Route path="/solicitudes" element={<Solicitudes/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </Router>
    </React.StrictMode>,
    </div>
  );
};

export default App;