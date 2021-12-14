import React, { useState } from "react";
import Home from "../../pages/Home";
import AdminArea from "../../pages/AdminArea";
import Products from "../../pages/Products";
import ShoppingCart from "../../pages/ShoppingCart";
import "./styles.css";

function Standard() {
  const [actualPage, setActualPage] = useState(<Home />);

  const pages = [
    { name: "Home", component: <Home /> },
    { name: "Produtos", component: <Products /> },
    { name: "Carrinho de compras", component: <ShoppingCart /> },
    { name: "Área do administrador", component: <AdminArea /> },
  ];

  return (
    <div className="container-standard">
      <div className="header">
        <div className="header-start">
          {pages.map((page) => {
            return (
              <button
                onClick={() => {
                  setActualPage(page.component);
                }}
              >
                {page.name}
              </button>
            );
          })}
        </div>
        <div className="header-end">
          <button
            onClick={() => {
              window.location.href = "/sign-in";
            }}
          >
            Sair
          </button>
        </div>
      </div>
      <div className="body">{actualPage}</div>
    </div>
  );
}

export default Standard;
