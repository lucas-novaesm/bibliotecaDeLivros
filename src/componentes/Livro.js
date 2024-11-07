import React from "react";

export default function Livro({ livro, onMoveShelf }) {
  return (
    <div className="livro">
      <h3>{livro.titulo}</h3>
      <p>Autor: {livro.autor}</p>
      <p>Descrição: {livro.descricao}</p>

      <select
        value={livro.estante}
        onChange={(e) => onMoveShelf(livro.id, e.target.value)}
      >
        <option value="lendo">Estou Lendo</option>
        <option value="quero-ler">Quero Ler</option>
        <option value="ja-li">Já Li</option>
      </select>
    </div>
  );
}
