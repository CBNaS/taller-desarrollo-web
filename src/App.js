import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import "antd/dist/antd.css";
import "./styles.css";

export default function App() {
  let [gifMeme, obtenerGif] = useState([]);
  let llave = "7UrPjSchSQMS98PpzW9F89NZ0uP5WvFq";

  let consultarAPI = async () => {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${llave}`;
    let respuesta = await fetch(url);
    let meme = await respuesta.json();
    obtenerGif(meme.data);
  };
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="App">
      <Header />
      Datos
      {gifMeme.map((dato, key) => (
        <div key={key}>
          <img src={dato.images.preview_webp.url} alt={dato.id} />
        </div>
      ))}
    </div>
  );
}
