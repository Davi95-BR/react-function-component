import React, { Component } from "react";
import FormularioCadastro from "../src/componente/FormularioCadastro/FormularioCadastro.jsx";
import "./App.css";
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
          <Typography align="center" variant="h3" component="h1">Formulário de cadastro</Typography>
          <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} validarSenha={validarSenha} validarEmail={validarEmail} useStyles ={makeStyles}/>
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarSenha(senha){
  if(senha.length !== 8){
    return { valido:false, texto: "senha deve ter 8 dígitos." }
  }else{
    return { valido: true, texto: "" }
  }
}

function validarEmail(email) {
  if(email.length !== 27){
    return { valido:false, texto: "email deve ter 27 dígitos." }
  }else{
    return { valido: true, texto: "" }
  }
}


export default App;
