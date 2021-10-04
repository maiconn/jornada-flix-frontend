import React, { Component } from "react";
import "./estilo.css";
import logo from './logoJornada.png'

export default class CabecalhoCadastro extends Component {
  render () {
    return (
      <header>
        <div class='container'>
          <a href='_blank'><img className='logo' src={logo} /></a>
          <a href='_blank'><h3 className='sair'>SAIR</h3></a>
        </div>
      </header>
    );
  }
}