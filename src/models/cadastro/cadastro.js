function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 10) {
    return { valido: false, texto: "senha deve ter entre 4 e 10 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarEmail(email) {
  if (email.length !== 28) {
    return { valido: false, texto: "email deve ter 27 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarNome(nome) {
  if (nome.length <= 2) {
    return { valido: false, texto: "O nome deve ter igual ou mais de três letras." };
  } else {
    return { valido: true, texto: "" };
  }
}
export { validarCPF, validarEmail, validarSenha, validarNome };
