import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Home() {
  return (
    <div>
      <p>Para teste</p>
      <Link to="/sign-up">Ir par a página de cadastro</Link>
      <br />
      <Link to="/sign-in">Ir para a página de login</Link>
    </div>
  );
}

export default Home;
