import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };

  const loginUsuario = async () => {
    try {
      const respuesta = await fetch("http://localhost:1235/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      localStorage.setItem("token", usuarioFetch.token);
      navigate("../", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
      alert("algo de los datos ingresados no es correcto");
    }
  };

  return (
    <div className="contacto-form">
      <div className="img-titulo">
        <img
          onClick={() => navigate("../")}
          className="imgflecha"
          src={require("../Materiales/Flecha.png")}
          alt=""
        />
        <h1>Ingresar</h1>
      </div>
      <form action="/aca_se_envia_ladata.com">
        <div className="nombre-correo-mensaje">
          <div className="nombre-correo">
            <label for="email">Email</label>
            <input
              onChange={handleChangeMail}
              className="input-largo"
              type={"email"}
              placeholder="Ingresar mail"
            />
            <label for="password">Contraseña</label>
            <input
              onChange={handleChangePass}
              className="input-largo"
              type="password"
              placeholder="Ingresar contraseña"
            />
          </div>
        </div>
        <div className="boton-centro">
          <button onClick={loginUsuario} className="boton-form" type="button">
            Ingresar
          </button>

          <p>No tenés cuenta?</p>

          <button
            onClick={() => navigate("../register")}
            className="boton-form"
          >
            Registrate!
          </button>
        </div>
      </form>
    </div>
  );
}
