import "./Buscador.css";

export default function Buscador({ filtrado }) {
  return (
    <div className="buscador">
      <div className="inputContenedor">
        <input
          type="search"
          id="input"
          placeholder="Buscar"
          onChange={filtrado}
        />
      </div>
    </div>
  );
}
