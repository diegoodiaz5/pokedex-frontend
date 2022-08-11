import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginUsuario = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:1235/login", {
        method: "POST",
        body: JSON.stringify(data),
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
    <div className="conteiner">
      <div className="subConteiner">
        <div className="tituloYFlecha">
          <img
            onClick={() => navigate("../")}
            className="imgflecha"
            src={require("../Materiales/Flecha.png")}
            alt=""
          />
          <h1 className="ingresar">Ingresar</h1>
        </div>
        <form className="formIngresar" onSubmit={handleSubmit(loginUsuario)}>
          <div>
            <div>
              <label for="email">Username</label>
              <input
                className="inputLogin"
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("username", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.username?.type === "required" && (
                <p>* Campo obligatorio</p>
              )}
              {errors.username?.type === "maxLength" && (
                <p>Debe contener un máximo de 20 caracteres</p>
              )}
              <label for="password">Contraseña</label>
              <input
                className="inputLogin"
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p>* Campo obligatorio</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>
                  Recuerda que tu contraseña contiene un mínimo de 6 caracteres
                </p>
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="boton-form">
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
    </div>
  );
}
