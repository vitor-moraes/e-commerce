import React, { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../../layouts/Frame";

function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const data = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
  };

  return (
    <Frame>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <div>
              <label htmlFor="name">Nome Completo</label>
              <div>
                <input
                  type="name"
                  required
                  className=""
                  id="name"
                  name="name"
                  placeholder="insira seu nome completo"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <div>
                <input
                  type="email"
                  required
                  className=""
                  id="email"
                  name="email"
                  placeholder="Insira seu e-mail aqui"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label className="" htmlFor="password">
                Senha
              </label>
              <div>
                <input
                  type="password"
                  required
                  className=""
                  id="password"
                  name="password"
                  placeholder="Insira sua senha aqui"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button className="basic-btn" type="submit">
                Cadastre-se!
              </button>
              <br />
              <Link to="/sign-in">Voltar</Link>
            </div>
          </div>
        </form>
      </div>
    </Frame>
  );
}

export default SignUp;
