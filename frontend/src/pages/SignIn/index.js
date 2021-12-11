import React, { useState } from "react";

// import { Container } from './styles';

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = () => {};

  return (
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
            <a className="register-link ml-1" href="/cadastro">
              cadastre-se aqui.
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
