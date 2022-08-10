import React from "react";
import "./Registro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

export default function Registro() {
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const registerUsuario = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:1235/register", {
        method: "POST",
        body: JSON.stringify(data),
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

          <form onSubmit={handleSubmit(registerUsuario)}>
            <div className="nombre-correo-mensaje">
              <div className="nombre-correo">
                <label for="name">Username</label>
                <input
                  className="input-largo"
                  type="name"
                  placeholder="username..."
                  {...register("username", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.username?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.username?.type === "maxLenght" && (
                  <p>Tamaño máximo: 20 caracteres</p>
                )}
                <label for="email">Email</label>
                <input
                  className="input-largo"
                  type="email"
                  placeholder="Ingresar mail"
                  {...register("mail", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.mail?.type === "required" && <p>* Campo obligatorio</p>}
                {errors.mail?.type === "pattern" && (
                  <p>Ingrese un email correcto</p>
                )}
                <label for="password">Contraseña</label>
                <input
                  className="input-largo"
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>Debe contener 6 caracteres comom mínimo</p>
                )}
              </div>
            </div>
            <div className="boton-centro">
              <button className="boton-form" type="submit">
                Unirse
              </button>
            </div>
          </form>
        </div>
      </>
    );
}
