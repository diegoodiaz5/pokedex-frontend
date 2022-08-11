import React from "react";
import "./Agregar.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { statsValidator } from "./validarStats";

export default function Agregar() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const agregarPokemon = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:1235/addPkmn", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error(await respuesta.json());
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {localStorage.token ? (
        <div className="contenedorAgregar">
          <div className="formularioAgregar">
            <div className="titleYFlechita">
              <img
                onClick={() => navigate("../")}
                className="imgFlechaAgregar"
                src={require("../Materiales/Flecha.png")}
                alt="arrow"
              />
              <h1 className="h1Agregar">Agregar Pokémon</h1>
            </div>
            <form
              className="formAgregar"
              onSubmit={handleSubmit(agregarPokemon)}
            >
              <p className="pAgregar">
                <label for="id">
                  <b>Id</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  className="inputAgregar"
                  placeholder="#123"
                  {...register("id", {
                    required: true,
                    maxLength: 4,
                    pattern: /#{1}[0-9]{3}/,
                  })}
                />
                {errors.id?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.id?.type === "maxLength" && (
                  <p className="pError"> Longitud máxima: 4 </p>
                )}
                {errors.id?.type === "pattern" && (
                  <p className="pError">
                    {" "}
                    Debe comenzar con # seguido de 3 numeros
                  </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="nombre">
                  <b>Nombre</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  className="inputAgregar"
                  placeholder="Pikachu"
                  {...register("nombre", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p className="pError">
                    El nombre no puede contener mas de 20 caracteres
                  </p>
                )}
                {errors.nombre?.type === "pattern" && (
                  <p className="pError">El nombre no puede contener números</p>
                )}
              </p>

              <p className="pAgregar">
                <label for="colorPrimario">
                  <b>Color Primario</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  placeholder="#ffffff"
                  className="inputAgregar"
                  {...register("colorPrimario", {
                    required: true,
                    maxLength: 7,
                    pattern: /#{1}[0-9a-zA-Z]{6}/,
                  })}
                />
                {errors.colorPrimario?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.colorPrimario?.type === "maxLength" && (
                  <p className="pError"> Longitud máxima: 7 </p>
                )}
                {errors.colorPrimario?.type === "pattern" && (
                  <p className="pError">
                    Debe empezar con # seguido de 6 valores entre a-f 0-9
                  </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="colorSecundario">
                  <b>Color Secundario</b>
                </label>
                <input
                  type="text"
                  className="inputAgregar"
                  placeholder="#a51f23"
                  {...register("colorSecundario", {
                    maxLength: 7,
                    pattern: /#{1}[0-9a-zA-Z]{6}/,
                  })}
                />
                {errors.colorSecundario?.type === "maxLength" && (
                  <p className="pError"> Longitud máxima: 7 </p>
                )}
                {errors.colorSecundario?.type === "pattern" && (
                  <p className="pError">
                    Debe empezar con # seguido de 6 valores entre a-f 0-9
                  </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="peso">
                  <b>Peso</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  className="inputAgregar"
                  placeholder="60.9"
                  {...register("peso", {
                    required: true,
                    pattern: /^[0-9]+([.][0-9]+)?$/,
                  })}
                />
                {errors.peso?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.peso?.type === "pattern" && (
                  <p className="pError">
                    Debe empezar con un número, y ser solo números!
                  </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="altura">
                  <b>Altura</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  className="inputAgregar"
                  placeholder="2.5"
                  {...register("altura", {
                    required: true,
                    pattern: /^[0-9]+([.][0-9]+)?$/,
                  })}
                />
                {errors.altura?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.altura?.type === "pattern" && (
                  <p className="pError">
                    Debe empezar con un número, y ser solo números!
                  </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="tipo1">
                  <b>Tipo primario</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="inputAgregar"
                  placeholder="Fire"
                  {...register("tipo1", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.tipo1?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.tipo1?.type === "pattern" && (
                  <p className="pError">Solo letras! </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="tipo2">
                  <b>Tipo secundario</b>
                </label>
                <input
                  className="inputAgregar"
                  placeholder="Flying"
                  {...register("tipo2", {
                    pattern: /^[A-Za-z]+$/,
                  })}
                ></input>
                {errors.tipo2?.type === "pattern" && (
                  <p className="pError">Solo letras! </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="movimiento1">
                  <b>Movimiento 1</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="inputAgregar"
                  placeholder="Pressure"
                  {...register("movimiento1", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.movimiento1?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
                {errors.movimiento1?.type === "pattern" && (
                  <p className="pError">Solo letras! </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="movimiento2">
                  <b>Movimiento 2</b>
                </label>
                <input
                  className="inputAgregar"
                  placeholder="Flame Body"
                  {...register("movimiento2", {
                    pattern: /^[A-Za-z]+$/,
                  })}
                ></input>
                {errors.movimiento2?.type === "pattern" && (
                  <p className="pError">Solo letras! </p>
                )}
              </p>
              <p className="pAgregar">
                <label for="descripcion">
                  <b>Descripción</b>
                  <span className="obligatorio">*</span>
                </label>
                <textarea
                  className="textAreaAgregar"
                  placeholder="Moltres is a large, avian Pokémon with golden plumage similar to that of the Phoenix......."
                  {...register("descripcion", {
                    required: true,
                  })}
                />
                {errors.descripcion?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
              </p>
              <div className="statsAgregar">
                <div className="statsAgregarColumna1">
                  <div className="inputStats">
                    <label for="HP">
                      <b>HP</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("HP", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.HP?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.HP?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.HP?.type === "pattern" && (
                      <p className="pError">Solo numeros!</p>
                    )}
                  </div>
                  <div className="inputStats">
                    <label for="ATK">
                      <b>ATK</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("ATK", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.ATK?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.ATK?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.ATK?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="DEF">
                      <b>DEF</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("DEF", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.DEF?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.DEF?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.DEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                </div>
                <div className="statsAgregarColumna2">
                  <div className="inputStats">
                    <label for="SATK">
                      <b>SATK</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("SATK", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SATK?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.SATK?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.SATK?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="SDEF">
                      <b>SDEF</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("SDEF", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SDEF?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.SDEF?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.SDEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="SPD">
                      <b>SPD</b>
                      <span className="obligatorio">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      className="inputAgregar"
                      {...register("SPD", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SPD?.type === "required" && (
                      <p className="pError">* Campo obligatorio</p>
                    )}
                    {errors.SPD?.type === "maxLength" && (
                      <p className="pError"> Longitud máxima: 3 </p>
                    )}
                    {errors.SDEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                </div>
              </div>
              <p className="pAgregar">
                <label for="imagen">
                  <b>Imagen</b>
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="inputAgregar"
                  placeholder="https://pokemon.com/image.png"
                  {...register("imagen", {
                    required: true,
                  })}
                />
                {errors.imagen?.type === "required" && (
                  <p className="pError">* Campo obligatorio</p>
                )}
              </p>
              <button className="buttonEnviar" type="submit" id="enviar">
                <p className="pAgregar">Enviar</p>
              </button>
              <p className="aviso">
                <span className="obligatorio"> * </span>
                <b>Los campos son obligatorios.</b>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div>logeate!</div>
      )}
    </>
  );
}
