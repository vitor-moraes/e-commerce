import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

function Home() {
  return (
    <div>
      <table>
				<caption><h1>E-shopee</h1></caption>
				<tbody>
					<tr><td><b><Link to="/sign-up">Ir par a página de cadastro</Link></b></td><td><Link to="/sign-in">Ir para a página de login</Link></td></tr>
					<tr><td></td><td></td></tr>
          <tr><td><img src="imagem_home.jpg"></img></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td>Bem-vindo a E-shopee, a maior loja virtual de games do Brasil!</td></tr>
        </tbody>
      </table>      
      
      
      
      <p>Bem-vindo a E-shopee!</p>


    </div>
  );
}

export default Home;
