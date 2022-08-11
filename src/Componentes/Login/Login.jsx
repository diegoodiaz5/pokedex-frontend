import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PikachuTransparent from "../Materiales/pikachu-transparent.png";
import LoginImg from "../Materiales/loginImg.png";

export default function Login() {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginFailed = document.getElementById("loginFallido");

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
      loginFailed.style.visibility = "visible";
    }
  };

  return (
    <div className="contenedorLogin">
      <div className="login">
        <div className="leftLogin">
          <div className="titleImage">
            <img
              onClick={() => navigate("../")}
              className="imgflecha"
              src={require("../Materiales/Flecha.png")}
              alt="arrow"
            />
            <h1 className="welcome">Bienvenido!</h1>
            <img
              className="pikachuImage"
              src={PikachuTransparent}
              alt="pikachu"
            />
          </div>
          <form className="formIngresar" onSubmit={handleSubmit(loginUsuario)}>
            <div className="conteinerDatos">
              <label className="pLogin">Username</label>
              <div className="conteinerInput">
                <input
                  className="inputUsername"
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  {...register("username", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.username?.type === "required" && (
                  <p className="parrafosErrors">* Campo obligatorio</p>
                )}
                {errors.username?.type === "maxLength" && (
                  <p className="parrafosErrors">
                    Debe contener un máximo de 20 caracteres
                  </p>
                )}
              </div>
              <label className="pLogin">Password</label>
              <input
                className="inputPassword"
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="parrafosErrors">* Campo obligatorio</p>
              )}
            </div>
            <div className="conteinerButtonLogin">
              <button type="submit" className="buttonLogin">
                LOGIN
              </button>
              <p className="parrafoFinal">
                ¿Aún no estás registrado?{" "}
                <a href="http://localhost:3000/register">Registrarme!</a>
              </p>
              <p id="loginFallido">
                <b>Datos incorrectos!</b>
              </p>
            </div>
          </form>
        </div>
        <div className="rightLogin">
          <img className="loginImg" src={LoginImg} alt="login" />
        </div>
      </div>
    </div>
  );
}
