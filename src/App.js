import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Componentes/Principal/Principal.jsx";
import Detalles from "./Componentes/Detalles/Detalles";
import Login from "./Componentes/Login/Login";
import Registro from "./Componentes/Registro/Registro";
import Agregar from "./Componentes/Agregar/Agregar";
import NotFound from "./Componentes/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/:id" element={<Detalles />} />
        <Route path="register" element={<Registro />} />
        <Route path="login" element={<Login />} />
        <Route path="agregarPokemon" element={<Agregar />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
