import "./Header.css";
import Pokeball from "../Materiales/Pokeball.png";
import Arrow from "../Materiales/Arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ ordenarPorNombre, ordenandoPorNombre }) {
  const navigate = useNavigate();
  const desconectarse = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <div className="titulo">
        <img
          className="pokeballTitulo"
          src={Pokeball}
          width="48px"
          height="48px"
          alt="Pokeball"
        />
        <h1>Pokédex</h1>
      </div>
      <div className="Regis-Login">
        {localStorage.token ? (
          <button onClick={desconectarse}>Deconectarse</button>
        ) : (
          <>
            <button onClick={() => navigate("register")}>Registrarse</button>
            <button onClick={() => navigate("login")}>Login</button>
          </>
        )}
      </div>
      <div className="filtro" onClick={ordenarPorNombre}>
        <p id="orden">{!ordenandoPorNombre ? "#" : "A Z"}</p>
        <img src={Arrow} width="32px" height="32px" alt="Flecha" />
      </div>
    </header>
  );
}
