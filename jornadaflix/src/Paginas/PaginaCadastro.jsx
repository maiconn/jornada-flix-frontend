import React, { Component } from "react";
import "../components/Cadastro/estilo.css";
import FormularioCadastro from "../components/Cadastro/FormularioCadastro.jsx";
import CabecalhoCadastro from "../components/Cadastro/CabecalhoCadastro.jsx";

export default class PaginaCadastro extends Component {
  render(){
    return(
      <div className="container">
        <section>
          <CabecalhoCadastro />
        </section>
          <section id="formulario">
            <FormularioCadastro />
          </section>
      </div>
    );
  }
}
