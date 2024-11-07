import React, { useState, useEffect } from "react";
import Estante from "../componentes/Estante";
import { buscarLivros } from "../api";

export default function Principal() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Carrega os livros da API
    buscarLivros().then(setLivros);
  }, []);

  const onMoveShelf = (id, estante) => {
    setLivros((livros) =>
      livros.map((livro) => (livro.id === id ? { ...livro, estante } : livro))
    );
  };

  const estantes = {
    "Estou Lendo": livros.filter((livro) => livro.estante === "lendo"),
    "Quero Ler": livros.filter((livro) => livro.estante === "quero-ler"),
    "Já Li": livros.filter((livro) => livro.estante === "ja-li"),
  };

  return (
    <div className="principal">
      {Object.keys(estantes).map((nomeEstante) => (
        <Estante
          key={nomeEstante}
          nome={nomeEstante}
          livros={estantes[nomeEstante]}
          onMoveShelf={onMoveShelf}
        />
      ))}
    </div>
  );
}
