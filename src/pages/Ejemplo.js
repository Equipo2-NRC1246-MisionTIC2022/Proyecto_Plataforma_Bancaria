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
        setCuotas_pen(response.cuotas_pendientes);
        setCuotas_pagadas(response.cuotas_pagadas);
        setCuota_capital(response.cuota_capital);
        setInteres(response.interes);
        setCuota_total(response.cuota_capital+response.interes);
      })
      .catch((error) => console.error("Error:", error))
  };

  