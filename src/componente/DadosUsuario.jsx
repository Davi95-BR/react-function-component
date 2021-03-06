import { TextField, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ValidacoesCadastro from '../contexts/validacoesCadastro';
import useErros from '../hooks/useErros';

function DadosUsuario({ aoEnviar}) {

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return (

        <Box border={1} borderColor="primary.main" borderRadius={16} p={2} pt={2} pb={2} mt={2.5}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (possoEnviar()) {
                        aoEnviar({ senha, email });
                    }
                }}
            >
                <Typography color="primary" align="left" variant="h5" component="h1">Dados do Usuário</Typography>
                <TextField
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.email.valido}
                    helperText={erros.email.texto}
                    label="email" type="email" id="email" name="email" variant="outlined" margin="normal" fullWidth required
                />

                <TextField
                    value={senha}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.senha.valido}
                    helperText={erros.senha.texto}
                    id="senha" label="senha" type="password" name="senha" variant="outlined" margin="normal" fullWidth required
                />
                <Button color="primary" type="submit" variant="contained">Próximo</Button>
            </form>
        </Box>
    );
}

export default DadosUsuario;