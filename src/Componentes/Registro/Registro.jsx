import React from "react";
import { useState } from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleChangeNombre = (evento) => {
    console.log(nombre);
    setNombre(evento.target.value);
  };
  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };
  const handleChangeConfirmPass = (evento) => {
    setPasswordConfirmation(evento.target.value);
  };
  const registerUsuario = async () => {
    try {
      const respuesta = await fetch("http://localhost:1235/register", {
        method: "POST",
        body: JSON.stringify({ nombre, mail, password, passwordConfirmation }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      console.log(usuarioFetch);

      navigate("/", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
    }
  };

  if (loading) {
    return <ClipLoader loading={loading} size={150} />;
  } else
    return (
      <>
        <div className="contacto-form">
          <div className="img-titulo">
            <img
              onClick={() => navigate("../")}
              className="imgflecha"
              src={require("../Materiales/Flecha.png")}
              alt=""
            />
            <h1 className="h1Registro">Registrarse</h1>
          </div>

          <form>
            <div className="nombre-correo-mensaje">
              <div className="nombre-correo">
                <label for="name">Nombre</label>
                <input
                  onChange={handleChangeNombre}
                  className="input-largo"
                  type="name"
                  placeholder="Ingresar nombre"
                  required
                />

                <label for="email">Email</label>
                <input
                  onChange={handleChangeMail}
                  className="input-largo"
                  type="email"
                  placeholder="Ingresar mail"
                  required
                />
                <label for="password">Contraseña</label>
                <input
                  onChange={handleChangePass}
                  className="input-largo"
                  type="password"
                  placeholder="Contraseña"
                  required
                />
                <label for="passwordConfirmation">Confirmar contraseña</label>
                <input
                  onChange={handleChangeConfirmPass}
                  className="input-largo"
                  type="password"
                  placeholder="Confirmar contraseña"
                  required
                />
              </div>
            </div>
            <div className="boton-centro">
              <button
                onClick={registerUsuario}
                className="boton-form"
                type="button"
              >
                Unirse
              </button>
            </div>
          </form>
        </div>
      </>
    );
}
