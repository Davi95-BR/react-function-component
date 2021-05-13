import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

function DadosPessoais({ aoEnviar, validarCPF}) {     // Hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [errosCpf, setErrosCpf] = useState({ cpf: { valido: true, texto: "" } });
    
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
                    let dados = [nome, sobrenome, cpf, novidades, promocoes]
                    aoEnviar(dados);
                }}
            >
                <Typography color="primary" align="left" variant="h5" component="h1">Informações básicas</Typography>
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
                <Button color="primary" type="submit" variant="contained">Cadastrar</Button>
            </form>
        </Box>
    );
}

 


export default DadosPessoais;