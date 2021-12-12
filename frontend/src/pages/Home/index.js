import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Standard from "../../layouts/Standard"

function Home() {
  return (
    <Standard>
      <Link to="/sign-in">Sair da sua conta</Link>
    </Standard>
  );
}

export default Home;
