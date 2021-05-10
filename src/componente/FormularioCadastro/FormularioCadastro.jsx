import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography'




function FormularioCadastro({ aoEnviar, validarCPF, validarSenha }) {     // Hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [errosCpf, setErrosCpf] = useState({ cpf: { valido: true, texto: "" } });
    const [errosSenha, setErrosSenha] = useState({ senha: { valido: true, texto: "" } });


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
                    let dados = [nome, sobrenome, cpf, senha, novidades, promocoes]
                    aoEnviar(dados);
                }}
            >
                <Typography align="left" variant="h5" component="h1">Informações básicas</Typography>
                <TextField
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    variant="outlined" id="nome" label="nome" fullWidth margin="normal" required />
                <TextField
                    value={sobrenome}
                    onChange={(event) => {
                        setSobrenome(event.target.value);
                    }}
                    variant="outlined" id="sobrenome" label="sobrenome" fullWidth margin="normal" required />
                <TextField
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value);
                    }}
                    onBlur={(event) => {
                        const ehValido = validarCPF(cpf);
                        setErrosCpf({ cpf: ehValido })
                    }}
                    error={!errosCpf.cpf.valido}
                    helperText={errosCpf.cpf.texto}
                    id="CPF"
                    label="CPF"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
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
                    id="outlined-basic"
                    label="senha"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    required
                />

                <FormControlLabel
                    label="novidades"
                    control={<Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        color="primary" name={'novidades'} />}
                />
                <FormControlLabel
                    label="promoções"
                    control={<Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        color="primary" name={'promocoes'} />}
                />
                <Button type="submit" variant="contained">Cadastrar</Button>
            </form>
        </Box>
    );
}


export default FormularioCadastro;