import { Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import DadosUsuario from '../DadosUsuario.jsx';
import DadosEntrega from './DadosEntrega.jsx';
import DadosPessoais from './DadosPessoais.jsx';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';



function FormularioCadastro({aoEnviar}) {    
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados);
        }
    });


    const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>, 
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography align="center" color="primary" variant="h5">Obrigado pelo cadastro</Typography>

    ];

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1)
    }

    return <>
    <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]} 
    </>;
}


export default FormularioCadastro;