import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'



function DadosUsuario({ aoEnviar, validarSenha, validarEmail}) {

    const [senha, setSenha] = useState("");
    const [errosSenha, setErrosSenha] = useState({ senha: { valido: true, texto: "" } });
    const [email, setEmail] = useState("");
    const [errosEmail, setErrosEmail] = useState({ email: { valido: true, texto: "" } });
    
    return (

        <Box 

            border={1}
            borderColor="primary.main"
            borderRadius={16}
            p={2} pt={2} pb={2} mt={2.5}

        >
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar();
                }}
            >
                <Typography color="primary" align="left" variant="h5" component="h1">Dados do Usuário</Typography>
                <TextField
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    onBlur={(event) => {
                        const ehValido = validarEmail(email);
                        setErrosEmail({ email: ehValido });
                    }}
                    error={!errosEmail.email.valido}
                    helperText={errosEmail.email.texto}
                    label="email" type="email" id="email" variant="outlined" margin="normal" fullWidth required
                />

                <TextField
                    value={senha}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    onBlur={(event) => {
                        const ehValido = validarSenha(senha);
                        setErrosSenha({ senha: ehValido })
                    }}
                    error={!errosSenha.senha.valido}
                    helperText={errosSenha.senha.texto}
                    id="senha" label="senha" type="password" variant="outlined" margin="normal" fullWidth required
                />
                <Button color="primary" type="submit" variant="contained">Cadastrar</Button>
            </form>
        </Box>
    );
}

export default DadosUsuario;