import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';



function FormularioCadastro() {
    const [nome, setNome] = useState();
    const { sobrenome, setSobrenome } = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log({ nome, sobrenome });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome(nome.substr(0, 3));
                    }
                    setNome(tmpNome);
                }}
                variant="outlined" id="nome" label="nome" fullWidth margin="normal" required />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                variant="outlined" id="sobrenome" label="sobrenome" fullWidth margin="normal" required />
            <TextField variant="outlined" id="cpf" label="CPF" fullWidth margin="normal" required />

            <FormControlLabel
                label="novidades"
                control={<Switch color="primary" name={'novidades'} disableRipple />}
            />
            <FormControlLabel
                label="promoções"
                control={<Switch color="primary" name={'promoções'} disableRipple />}
            />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    );
}


export default FormularioCadastro;