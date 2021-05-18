import React, { Component } from "react";
import FormularioCadastro from "../src/componente/FormularioCadastro/FormularioCadastro.jsx";
import "./App.css";
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto';
import {validarCPF, validarEmail, validarNome, validarSenha} from './models/cadastro/cadastro.js'
class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
          <Typography align="center" variant="h3" component="h1">Formulário de cadastro</Typography>
          <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf: validarCPF, senha: validarSenha, email: validarEmail, nome: validarNome}}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}


export default App;
