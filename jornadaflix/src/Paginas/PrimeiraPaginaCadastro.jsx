import React, { Component } from 'react';
import CabecalhoPrimeiraPaginaCadastro from "../components/Cadastro/CabecalhoPrimeiraPaginaCadastro.jsx";
import "./estilo.css";

export default class PrimeiraPaginaCadastro extends Component {
  render() {
    return(
      <div className="PrimeiraPaginaCadastro">
        <div className="CabecalhoPrimeiraPaginaCadastro">
          <CabecalhoPrimeiraPaginaCadastro />
        </div>
        <div className="formularioPrimeiraPaginaCadastro">
          <label><h2>CADASTRO</h2></label>
          <br/>
          <section>
            <input 
            type="email" id="email"
            placeholder="Email@exemplo.com" />
            <br/>
          </section>
          <section>
            <input
            type="password"
            id="senha"
            placeholder="Senha" />
            <br/>
          </section>
          <section>
            <button
            role="button"
            id="avancar"
            onClick="">AVANÇAR</button>
          </section>
        </div>
      </div>
    );
  }
}