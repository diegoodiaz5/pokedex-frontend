import React from "react";
import Header from "../Header/Header.jsx";
import Buscador from "../Buscador/Buscador";
import Section from "../Section/Section.jsx";
import "./Principal.css";
import { useState } from "react";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  borderRight: "0",
};

export default function Principal() {
  const [lista, setLista] = useState([]);
  const [listaDos, setListaDos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPokemons = async () => {
      try {
        const respuesta = await fetch("http://localhost:1235/", {
          headers: { "auth-token": localStorage.token },
        });

        if (!respuesta.ok) {
          throw new Error("Error en el servidor");
        }

        const pokemonFetch = await respuesta.json();
        setLista(pokemonFetch);
        setListaDos(pokemonFetch);
        setLoading(false);
      } catch (error) {
        console.log("No se pudo conectar con el backend");
      }
    };
    cargarPokemons();
  }, []);

  const [ordenandoPorNombre, setOrdenandoPorNombre] = useState(false);
  const ordenar = () => {
    if (ordenandoPorNombre === false) {
      const listaOrdenada = lista.sort((a, b) =>
        a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
      );
      setListaDos([...listaOrdenada]);

      setOrdenandoPorNombre(true);
    } else {
      const listaOrdenada = lista.sort((a, b) =>
        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
      );
      setListaDos([...listaOrdenada]);
      setOrdenandoPorNombre(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setLista(listaDos);
    } else {
      const filtroLista = [...listaDos].filter((pokemon) => {
        const buscar = new RegExp(`.*${e.target.value}.*`, "gi");
        return pokemon.nombre.match(buscar);
      });
      setLista(filtroLista);
    }
  };
  return (
    <div className="principal">
      <div className="conteinerPrincipal">
        <Header
          ordenarPorNombre={ordenar}
          ordenandoPorNombre={ordenandoPorNombre}
        />
        <Buscador filtrado={handleChange} />
        {loading ? (
          <ClipLoader loading={loading} cssOverride={override} size={150} />
        ) : (
          <Section pokemons={lista} />
        )}
      </div>
    </div>
  );
}
