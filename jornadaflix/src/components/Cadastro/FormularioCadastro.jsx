import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  render(){
    return(
      <form className="formContainer">
        <h2>DADOS PESSOAIS</h2>
        <input type="text" id="nome" placeholder="Nome" />
        <br/>
        <label>Data de Nascimento: </label>
        <input type="date" id="nasc" />
        <br/>
        <section>
          <p>Genero:</p>
          <input type="radio" id="feminino" name="genero" value="feminino"/>
          <label for="feminino">Feminino</label>
          <input type="radio" id="masculino" name="genero" value="masculino"/>
          <label for="masculino">Masculino</label>
          <input type="radio" id="naoBinario" name="genero" value="naoBinario"/>
          <label for="naoBinario">Não Binario</label>
        </section>
        <br/>
        <label>Quais desses estilos você mais se identifica:</label>
        <section>
          <input type="checkbox" id="acao" name="estilo" value="acao"/>
          <label for="acao"> Ação </label>
        </section>
        <section>
          <input type="checkbox" id="aventura" name="estilo" value="aventura"/>
          <label for="aventura"> Aventura </label>
        </section>
        <section>
          <input type="checkbox" id="comedia" name="estilo" value="comedia"/>
          <label for="comedia"> Comédia </label>
        </section>
        <section>
          <input type="checkbox" id="documentario" name="estilo" value="documentario"/>
          <label for="documentario"> Documentário </label>
        </section>
        <section>
          <input type="checkbox" id="drama" name="estilo" value="drama"/>
          <label for="drama"> Drama </label>
        </section>
        <section>
          <input type="checkbox" id="fantasia" name="estilo" value="fantasia"/>
          <label for="fantasia"> Fantasia </label>
        </section>
        <section>
          <input type="checkbox" id="ficcaoCient" name="estilo" value="ficcaoCient"/>
          <label for="ficcaoCient"> Ficção Científica </label>
        </section>
        <section>
          <input type="checkbox" id="romance" name="estilo" value="romance"/>
          <label for="romance"> Romance </label>
        </section>
        <section>
          <input type="checkbox" id="suspense" name="estilo" value="suspense"/>
          <label for="suspense"> Suspense </label>
        </section>
        <section>
          <input type="checkbox" id="terror" name="estilo" value="terror"/>
          <label for="terror"> Terror </label>
        </section>
        <button role="button" id="registrar" onCliclk="">REGISTRAR</button>
      </form>
    );
  }
}