import React from "react";
import Error404 from "../Materiales/error404.jpg";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="conteinerNotFound">
      <img className="errorImage" src={Error404} alt="error404" />
      <button onClick={() => navigate("../")} className="backHome">
        {" "}
        Back home
      </button>
    </div>
  );
}
