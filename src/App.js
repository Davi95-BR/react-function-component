import React, { Component } from "react";
import FormularioCadastro from "../src/componente/FormularioCadastro/FormularioCadastro.jsx";
import "./App.css";
import Container from '@material-ui/core/Container'
class App extends Component {
  /*constructor() {
    
  
  }
  */

  render() {
    return (
      <Container component="article" maxWidth="sm">
          <h1>Formulário de cadastro</h1>
          <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
