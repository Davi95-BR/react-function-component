import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosUsuario from '../DadosUsuario.jsx';
import DadosEntrega from './DadosEntrega.jsx';
import DadosPessoais from './DadosPessoais.jsx';

function FormularioCadastro({aoEnviar, validarCPF, validarSenha, validarEmail}) {    
    const [etapaAtual, setEtapaAtual] = useState(0);

    function proximo(){
        setEtapaAtual(etapaAtual +1)
    }

    function formularioAtual(etapa){
        switch(etapa){
            case 0: return <DadosUsuario  aoEnviar={proximo} validarSenha={validarSenha} validarEmail={validarEmail}/>;
            case 1: return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
            case 2: return <DadosEntrega aoEnviar={aoEnviar} />;
            default: <Typography>Erro ao selecionar formulário</Typography>
        }
    }
   
    return (
        <>

        { formularioAtual(etapaAtual) }
       
        </>
    );
}


export default FormularioCadastro;