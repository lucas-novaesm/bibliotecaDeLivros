import React from "react";
import Livro from "./Livro";

export default function Estante({ nome, livros, onMoveShelf }) {
  return (
    <div className="estante">
      <h2>{nome}</h2>
      <div className="livros">
        {livros.map((livro) => (
          <Livro key={livro.id} livro={livro} onMoveShelf={onMoveShelf} />
        ))}
      </div>
    </div>
  );
}
