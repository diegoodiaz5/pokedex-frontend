import React from "react";
import "./Agregar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Agregar() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [colorPrimario, setColorPrimario] = useState("");
  const [colorSecundario, setColorSecundario] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipo1, setTipo1] = useState("");
  const [tipo2, setTipo2] = useState("");
  const [movimiento1, setMovimiento1] = useState("");
  const [movimiento2, setMovimiento2] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [HP, setHP] = useState("");
  const [ATK, setATK] = useState("");
  const [DEF, setDEF] = useState("");
  const [SATK, setSATK] = useState("");
  const [SDEF, setSDEF] = useState("");
  const [SPD, setSPD] = useState("");
  const [imagen, setImagen] = useState("");

  const handleChangeId = (ev) => {
    setId(ev.target.value);
  };

  const handleChangeNombre = (ev) => {
    setNombre(ev.target.value);
  };

  const handleChangeColorPrimario = (ev) => {
    setColorPrimario(ev.target.value);
  };

  const handleChangeColorSecundario = (ev) => {
    setColorSecundario(ev.target.value);
  };

  const handleChangePeso = (ev) => {
    setPeso(ev.target.value);
  };

  const handleChangeAltura = (ev) => {
    setAltura(ev.target.value);
  };

  const handleChangeTipo1 = (ev) => {
    setTipo1(ev.target.value);
  };

  const handleChangeTipo2 = (ev) => {
    setTipo2(ev.target.value);
  };

  const handleChangeMovimiento1 = (ev) => {
    setMovimiento1(ev.target.value);
  };

  const handleChangeMovimiento2 = (ev) => {
    setMovimiento2(ev.target.value);
  };

  const handleChangeDescripcion = (ev) => {
    setDescripcion(ev.target.value);
  };

  const handleChangeHP = (ev) => {
    setHP(ev.target.value);
  };

  const handleChangeATK = (ev) => {
    setATK(ev.target.value);
  };

  const handleChangeDEF = (ev) => {
    setDEF(ev.target.value);
  };

  const handleChangeSATK = (ev) => {
    setSATK(ev.target.value);
  };

  const handleChangeSDEF = (ev) => {
    setSDEF(ev.target.value);
  };

  const handleChangeSPD = (ev) => {
    setSPD(ev.target.value);
  };

  const handleChangeImagen = (ev) => {
    setImagen(ev.target.value);
  };

  const navigate = useNavigate();

  const agregarPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:1235/addPkmn", {
        method: "POST",
        body: JSON.stringify({
          id,
          nombre,
          colorPrimario,
          colorSecundario,
          peso,
          altura,
          tipo1,
          tipo2,
          movimiento1,
          movimiento2,
          descripcion,
          HP,
          ATK,
          DEF,
          SATK,
          SDEF,
          SPD,
          imagen,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error(await respuesta.json());
      }
      const agregarPkmnFetch = await respuesta.json();
      console.log(agregarPkmnFetch);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {localStorage.token ? (
        <div className="contact_form">
          <div className="formulario">
            <img
              onClick={() => navigate("../")}
              className="imgflecha"
              src={require("../Materiales/Flecha.png")}
              alt=""
            />
            <h1 className="h1Agregar">Agregar Pokémon</h1>
            <form>
              <p className="pAgregar">
                <label for="id">
                  Id
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="id"
                  required="obligatorio"
                  placeholder="Id del pokémon"
                  onChange={handleChangeId}
                />
              </p>
              <p className="pAgregar">
                <label for="nombre">
                  Nombre
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  required="obligatorio"
                  placeholder="Nombre del pokémon"
                  onChange={handleChangeNombre}
                />
              </p>

              <p className="pAgregar">
                <label for="colorPrimario">
                  Color Primario
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="colorPrimario"
                  placeholder="Color primario del Pokémon"
                  required="obligatorio"
                  onChange={handleChangeColorPrimario}
                />
              </p>

              <p className="pAgregar">
                <label for="colorSecundario">Color Secundario</label>
                <input
                  type="text"
                  id="colorSecundario"
                  placeholder="Color secundario del Pokémon"
                  onChange={handleChangeColorSecundario}
                />
              </p>
              <p className="pAgregar">
                <label for="peso">
                  Peso
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="peso"
                  required="obligatorio"
                  placeholder="Escribe el peso del Pokémon en kg"
                  onChange={handleChangePeso}
                />
              </p>

              <p className="pAgregar">
                <label for="altura">
                  Altura
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="altura"
                  required="obligatorio"
                  placeholder="Escribe la altura del pokémon en metros"
                  onChange={handleChangeAltura}
                />
              </p>

              <p className="pAgregar">
                <label for="tipo1">
                  Tipo primario
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="tipo1"
                  required="obligatorio"
                  placeholder="Escribe el tipo primario del Pokémon"
                  onChange={handleChangeTipo1}
                ></input>
              </p>

              <p className="pAgregar">
                <label for="tipo2">Tipo secundario</label>
                <input
                  className="texto_mensaje"
                  id="tipo2"
                  placeholder="Escribe el tipo secundario del Pokémon"
                  onChange={handleChangeTipo2}
                ></input>
              </p>

              <p className="pAgregar">
                <label for="movimiento1">
                  Movimiento 1<span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="movimiento1"
                  required="obligatorio"
                  placeholder="Escribe el movimiento 1 del Pokémon"
                  onChange={handleChangeMovimiento1}
                ></input>
              </p>

              <p className="pAgregar">
                <label for="movimiento2">Movimiento 2</label>
                <input
                  className="texto_mensaje"
                  id="movimiento2"
                  placeholder="Escribe el movimiento 2 del Pokémon"
                  onChange={handleChangeMovimiento2}
                ></input>
              </p>

              <p className="pAgregar">
                <label for="descripcion">Descripción</label>
                <textarea
                  className="texto_mensaje"
                  id="descripcion"
                  placeholder="Escribe la descripción del Pokémon"
                  onChange={handleChangeDescripcion}
                ></textarea>
              </p>

              <div className="statsAgregar">
                <div className="statsAgregarColumna1">
                  <div className="inputStats">
                    <label for="HP">HP</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeHP}
                    />
                  </div>
                  <div className="inputStats">
                    <label for="ATK">ATK</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeATK}
                    />
                  </div>
                  <div className="inputStats">
                    <label for="DEF">DEF</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeDEF}
                    />
                  </div>
                </div>
                <div className="statsAgregarColumna2">
                  <div className="inputStats">
                    <label for="SATK">SATK</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeSATK}
                    />
                  </div>
                  <div className="inputStats">
                    <label for="SDEF">SDEF</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeSDEF}
                    />
                  </div>
                  <div className="inputStats">
                    <label for="SPD">SPD</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={handleChangeSPD}
                    />
                  </div>
                </div>
              </div>
              <p className="pAgregar">
                <label for="imagen">
                  Imagen<span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="imagen"
                  required="obligatorio"
                  placeholder="Link de la imágen del Pokémon"
                  onChange={handleChangeImagen}
                ></input>
              </p>

              <button
                className="buttonEnviar"
                type="button"
                id="enviar"
                onClick={agregarPokemon}
              >
                <p className="pAgregar">Enviar</p>
              </button>

              <p className="aviso">
                <span className="obligatorio"> * </span>los campos son
                obligatorios.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div>No estás logeado wachin</div>
      )}
    </>
  );
}
