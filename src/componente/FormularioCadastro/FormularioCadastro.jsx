import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro({ aoEnviar, validarCPF }) {     // Hooks
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
    const [senha, setSenha] = useState("");


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar(nome, sobrenome, cpf, senha, novidades, promocoes);
            }}
        >
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
                    setErros({ cpf: ehValido })
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
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
    );
}


export default FormularioCadastro;