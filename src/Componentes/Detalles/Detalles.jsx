import "./Detalles.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ArrowLeft from "../Materiales/arrow-left.svg";
import Pokeball from "../Materiales/Pokeball.png";
import Weight from "../Materiales/Weight.svg";
import Height from "../Materiales/Height.svg";
import { Link } from "react-router-dom";
import ArrowBefore from "../Materiales/arrow-before.svg";
import ArrowNext from "../Materiales/arrow-next.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  borderRight: "0",
};

export default function Detalles() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const cargarPokemon = async () => {
      try {
        const respuesta = await fetch(`http://localhost:1235/${id}`, {
          headers: { "auth-token": localStorage.token },
        });

        const respuestaJSON = await respuesta.json();
        setPokemon(respuestaJSON.pokemon);
        setNext(respuestaJSON.next?.nombre);
        setPrev(respuestaJSON.prev?.nombre);

        console.log(respuestaJSON);

        setLoading(false);
      } catch (error) {
        navigate("/404", { replace: true });
        console.log(error);
      }
    };
    cargarPokemon();
  }, [id, navigate]);
  return (
    <>
      <div className="contenedor">
        <div
          className="tarjetaPokDetalle"
          style={{ backgroundColor: pokemon.colorPrimario }}
        >
          {prev && (
            <div
              onClick={() =>
                navigate(`/${prev}`, {
                  replace: true,
                })
              }
              className="vector1"
            >
              <img src={ArrowBefore} alt="" />
            </div>
          )}

          {next && (
            <div
              onClick={() =>
                navigate(`/${next}`, {
                  replace: true,
                })
              }
              className="vector2"
            >
              <img src={ArrowNext} alt="" />
            </div>
          )}

          <div className="nombrePokemon">
            <Link to={"/"}>
              <div className="imgFlecha">
                <img src={ArrowLeft} alt="flecha-atras" />
              </div>
            </Link>

            <div className="pokeName">
              <h1 className="nombre">{pokemon.nombre}</h1>
              <h2 className="h2">{pokemon.id}</h2>
            </div>
          </div>
          <div className="imageFondo">
            <img src={Pokeball} alt="pokeball" />
          </div>
          <div className="imagenPoke">
            {loading ? (
              <ClipLoader loading={loading} cssOverride={override} size={150} />
            ) : (
              <img
                className="imgPoke"
                src={pokemon.imagen}
                alt="foto pokemon"
              />
            )}
          </div>

          <div className="card">
            <div className="cardType">
              <div
                className="cuadro1"
                style={{ background: pokemon.colorPrimario }}
              >
                {pokemon.tipo1}
              </div>
              {pokemon.colorSecundario !== "" ? (
                <div
                  className="cuadro2"
                  style={{ background: pokemon.colorSecundario }}
                >
                  {pokemon.tipo2}
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="cardTitle" style={{ color: pokemon.colorPrimario }}>
              <h3>About</h3>
            </div>

            <div className="cardBout">
              <div className="cardWeight">
                <div className="cardImgkg">
                  <img src={Weight} alt="balanza" />
                  <p>{pokemon.peso / 10} kg</p>
                </div>
                <div className="cardWeightTitle">
                  <p>Wheight</p>
                </div>
              </div>

              <div className="cardHeight">
                <div className="cardImgM">
                  <img src={Height} alt="regla" />
                  <p>{pokemon.altura / 10} m</p>
                </div>
                <div className="cardHeightTitle">
                  <p>Height</p>
                </div>
              </div>

              <div className="cardMoves">
                <div className="cardText1">
                  <p>
                    {pokemon.movimiento1} <br />
                    {pokemon.movimiento2}
                  </p>
                </div>
                <div className="cardTextMoves">
                  <p>Moves</p>
                </div>
              </div>
            </div>
            <div className="cardText2">
              <p>{pokemon.descripcion}</p>
            </div>
            <div className="cardTitleGraph">
              <p
                className="pCardTitle"
                style={{ color: pokemon.colorPrimario }}
              >
                Base Stats
              </p>
            </div>

            <div className="contenedorGraph">
              <div
                className="atributtes"
                style={{ color: pokemon.colorPrimario }}
              >
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
              </div>
              <div className="values">
                <p>{`${pokemon.HP}`.padStart(3, 0)}</p>
                <p>{`${pokemon.ATK}`.padStart(3, 0)}</p>
                <p>{`${pokemon.DEF}`.padStart(3, 0)}</p>
                <p>{`${pokemon.SATK}`.padStart(3, 0)}</p>
                <p>{`${pokemon.SDEF}`.padStart(3, 0)}</p>
                <p>{`${pokemon.SPD}`.padStart(3, 0)}</p>
              </div>
              <div className="graph">
                <div className="graphlinea">
                  <div
                    className="barra1"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.HP / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra2"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.ATK / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra3"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.DEF / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra4"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SATK / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra5"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SDEF / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra6"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SPD / 2}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
