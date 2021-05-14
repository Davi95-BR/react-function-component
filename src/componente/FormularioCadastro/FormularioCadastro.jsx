import React, {useState, useEffect} from 'react';
import DadosUsuario from '../DadosUsuario.jsx';
import DadosEntrega from './DadosEntrega.jsx';
import DadosPessoais from './DadosPessoais.jsx';

function FormularioCadastro({aoEnviar, validarCPF, validarSenha, validarEmail}) {    
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        console.log(dadosColetados);
    });

    const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validarSenha={validarSenha} validarEmail={validarEmail}/>, 
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar}/>,
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual +1)
    }

    return <>{formularios[etapaAtual]} </>;
}

export default FormularioCadastro;