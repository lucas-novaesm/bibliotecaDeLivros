import React, { useState, useEffect } from "react";
import { buscarLivrosPorTermo } from "../api";
import Livro from "../componentes/Livro";

export default function Pesquisa() {
  const [termo, setTermo] = useState("");
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    if (termo) {
      buscarLivrosPorTermo(termo).then(setLivros);
    } else {
      setLivros([]);
    }
  }, [termo]);

  return (
    <div className="pesquisa">
      <input
        type="text"
        placeholder="Pesquise por livros"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <div className="resultados">
        {livros.map((livro) => (
          <Livro
            key={livro.id}
            livro={livro}
            onMoveShelf={(id, estante) => {}}
          />
        ))}
      </div>
    </div>
  );
}
