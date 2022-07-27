import "./Section.css";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";
import Pregunta from "../Materiales/pregunta.png";
import { Link } from "react-router-dom";
import "../TarjetaPokemon/TarjetaPokemon.css";

export default function Section({ pokemons }) {
  return (
    <div className="tarjetas">
      {localStorage.token ? (
        <Link to={"agregarPokemon"} key="newPokemon" className="tarjetaAgregar">
          <div className="claseGeneral">
            <p className="numPokeTarjeta">#???</p>
            <div className="imgTarjetaDeAgregar">
              <img
                className="imagenPokemonAgregar"
                src={Pregunta}
                alt="signo-de-pregunta"
              />
            </div>
            <div className="h3Agregar">
              <h3>Agregar Pokémon</h3>
            </div>
          </div>
        </Link>
      ) : (
        <></>
      )}
      {pokemons.map((pokemon) => (
        <TarjetaPokemon pokemon={pokemon} key={"" + pokemon.id} />
      ))}
    </div>
  );
}
