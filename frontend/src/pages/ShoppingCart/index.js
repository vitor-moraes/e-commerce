import React, { useState, useEffect } from "react";

function ShoppingCart() {
  const [itensInCart, setItensInCart] = useState(null);

  const GetChartData = async () => {
    try {
      // Pegar o id dos itens no localhost
      const itens = [];
      setItensInCart(itens);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetChartData();
  }, []);
  
  return (
    <div>
      <text>
        {itensInCart.map((item) => {
          return item;
        })}
      </text>
      <button>Atualizar carrinho</button>
    </div>
  );
}

export default ShoppingCart;
