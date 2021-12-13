import React, { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../../layouts/Frame";

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = () => {
    window.location.href = "/";
  };

  return (
    <Frame>
      <form method="POST">
        <div className="form-group mt-5">
          <div className="mt-3">
            <label htmlFor="login">E-mail</label>
            <input
              type="text"
              required
              className="form-control"
              id="login"
              name="login"
              placeholder="Insira seu E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              name="password"
              placeholder="Insira sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mx-auto text-center" style={{ maxWidth: 200 }}>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-custom waves-btn waves-effect mt-3"
            >
              Entrar
            </button>
          </div>
          <div className="mt-3 text-center">
            <p>
              Não possui uma conta?
              <br />
              <Link to="/sign-up">cadastre-se aqui.</Link>
            </p>
          </div>
        </div>
      </form>
    </Frame>
  );
}

export default SignIn;
