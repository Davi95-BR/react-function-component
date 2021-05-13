import React from 'react';
import DadosUsuario from '../DadosUsuario.jsx';
import DadosPessoais from './DadosPessoais.jsx';

function FormularioCadastro({aoEnviar, validarCPF, validarSenha, validarEmail}) {     
   
    return (
        <>
        <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
        <DadosUsuario aoEnviar={aoEnviar} validarSenha={validarSenha} validarEmail={validarEmail} />
        </>
    );
}

export default FormularioCadastro;