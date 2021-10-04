import React, { Component } from 'react';
import "../components/Inicial/estilo.css";
import CabecalhoInicial from "../components/Inicial/CabecalhoInicial.jsx";

export default class PaginaInicial extends Component{
    render() {
      return (
        <div>
          <header>
            <CabecalhoInicial />
          </header>
          <div className="container2">
            <p className="texto">
              FILMES, SÉRIES E MUITO MAIS!<br />
              SEM LIMITES.
            </p>
          </div>
          <section className="inputEmail">
            <input type="email" placeholder="EMAIL" />
            <div>
              <button role="button" id="assistir">ASSISTIR</button>
            </div>
            
          </section>
        </div>
      );
    }
}