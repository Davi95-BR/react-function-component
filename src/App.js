import React, { Component, Fragment } from "react";
import FormularioCadastro from "../src/componente/FormularioCadastro/FormularioCadastro.jsx";
import "./App.css";

class App extends Component {
  /*constructor() {
    
  
  }
  */

  render() {
    return (
      <Fragment className="conteudo">
        <main className="conteudo-principal">
          <h1>Formulário de cadastro</h1>
          <FormularioCadastro />
        </main>
      </Fragment>
    );
  }
}

export default App;
