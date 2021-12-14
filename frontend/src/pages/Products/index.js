import React, { useState, useEffect } from "react";
import "./styles.css";
const exempleItens = [
  {
    categorias: ["X", "Y"],
    descricao: "Y",
    preco: "Z",
    imagem: "H",
    nome: "A",
  },
  {
    categorias: ["X", "Y"],
    descricao: "Y",
    preco: "Z",
    imagem: "H",
    nome: "B",
  },
  {
    categorias: ["X", "Y"],
    descricao: "Y",
    preco: "Z",
    imagem: "H",
    nome: "C",
  },
  {
    categorias: ["X", "Y"],
    descricao: "Y",
    preco: "Z",
    imagem: "H",
    nome: "D",
  },
];

function Products() {
  const [itens, setItens] = useState([]);

  const fetchPossibleProducts = async () => {
    setItens(exempleItens);
  };

  useEffect(() => {
    fetchPossibleProducts();
  }, []);

  const itensFrame = (item) => {
    return (
      <div className="item-container">
        <text>{item.imagem}</text>
        <text>Nome: {item.nome}</text>
        <text>Descrição: {item.descricao}</text>
        <text>
          Categorias:{" "}
          {item.categorias.map((categoria) => {
            return <strong> | {categoria}</strong>;
          })}
        </text>
        <text>Preço: R$ {item.preco}</text>
        <button>Comprar</button>
      </div>
    );
  };

  return (
    <div className="products-container">
      <div className="products-header"></div>
      <div className="products-body">
        {itens.map((item) => {
          return itensFrame(item);
        })}
      </div>
      <div className="products-footer"></div>
    </div>
  );
}

export default Products;
