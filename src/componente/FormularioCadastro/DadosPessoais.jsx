import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar}) {     // Hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    
    
    return (

        <Box border={1} borderColor="primary.main" borderRadius={16} p={2} pt={2} pb={2} mt={2.5}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if(possoEnviar()){ aoEnviar({nome, sobrenome, cpf, novidades, promocoes}); }
                }}
            >
                <Typography color="primary" align="left" variant="h5" component="h1">Informações básicas</Typography>
                <TextField
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                    variant="outlined" name="nome" id="nome" label="nome" fullWidth margin="normal" required />
                <TextField
                    value={sobrenome}
                    onChange={(event) => {
                        setSobrenome(event.target.value);
                    }}
                    variant="outlined" id="sobrenome" name="sobrenome" label="sobrenome"  fullWidth margin="normal" required />
                <TextField
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value);
                    }}
                    onBlur={validarCampos}
                    error={!erros.cpf.valido}
                    helperText={erros.cpf.texto}
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
                    name="novidades"
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
                    name="promocoes"
                    control={<Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        color="primary" name={'promocoes'} />}
                />
                <Button color="primary" type="submit" variant="contained">Próximo</Button>
            </form>
        </Box>
    );
}

 


export default DadosPessoais;