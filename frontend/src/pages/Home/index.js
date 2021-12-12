import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/sign-in">Sair da sua conta</Link>
    </div>
  );
}

export default Home;
