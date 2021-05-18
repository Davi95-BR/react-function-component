import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

function DadosPessoais({ aoEnviar, validacoes}) {     // Hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    function validarCampos(event){

        const {name, value} = event.target;
        const ehValido = validacoes[name](value);
        const novoEstado = {...erros, name: ehValido}
        setErros(novoEstado);
    }
    
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
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
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
                    variant="outlined" id="sobrenome" label="sobrenome"  fullWidth margin="normal" required />
                <TextField
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!errosCpf.cpf.valido}
                    helperText={errosCpf.cpf.texto}
                    id="CPF"
                    label="CPF"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    name="cpf"
                    fullWidth
                    required
                />
                
                <FormControlLabel
                value={novidades}
                    label="novidades"
                    control={<Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        color="primary" name={'novidades'} />}
                />
                <FormControlLabel
                value={promocoes}
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