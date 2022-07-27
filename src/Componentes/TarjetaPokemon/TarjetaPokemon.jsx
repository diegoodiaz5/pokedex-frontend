import { Link } from "react-router-dom";
import "./TarjetaPokemon.css";
import Cruz from "../Materiales/cruz.png";

export default function TarjetaPokemon({ pokemon }) {
  const eliminarPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:1235/removePkmn", {
        method: "DELETE",
        body: JSON.stringify({
          id: pokemon.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error(await respuesta.json());
      }
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };
  return (
    <>
      <Link to={`/${pokemon.nombre}`} className="plantillaPokemon">
        <div
          className="pokemonesClases"
          style={{
            border: `solid ${pokemon.colorPrimario}`,
            borderWidth: "4px 4px 10px 4px",
          }}
        >
          <p className="numPoke" style={{ color: pokemon.colorPrimario }}>
            {pokemon.id}
          </p>
          <div className="imgTarjeta">
            <img className="imagenPokemon" src={pokemon.imagen} alt="" />
          </div>
          <div
            className="h3"
            style={{ backgroundColor: pokemon.colorPrimario }}
          >
            <h3>{pokemon.nombre}</h3>
          </div>
        </div>
      </Link>
      {localStorage.token && (
        <img className="cruz" src={Cruz} alt="cruz" onClick={eliminarPokemon} />
      )}
    </>
  );
}
