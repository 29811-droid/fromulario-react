import React from 'react';
import './Cadastro.css';
import logoDarkSouls from "../assets/logo.png";

function App() {
  return (
    <div className="login-container">
      <div className="login-banner">
      </div>

      <div className="login-form-section">
        <div className="form-wrapper">
          <div className="logo-area">
            <img src={logoDarkSouls} alt="Dark Souls 3 Logo" className="game-logo" />
          </div>

          <h2>Fazer Cadastro</h2>

          <form>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-group">
              <label>Confirmar senha</label>
              <input type="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn-enter">CRIAR</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;