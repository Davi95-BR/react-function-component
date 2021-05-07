import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro() {
    return (
        <form>
            <TextField variant="outlined" id="Nome" label="Nome" fullWidth margin="normal" required />
            <TextField variant="outlined" id="Sobrenome" label="Sobrenome" fullWidth margin="normal" required />
            <TextField variant="outlined" id="CPF" label="CPF" fullWidth margin="normal" required />

            <FormControlLabel
                label="Novidades"
                control={<Switch color="primary" name={'Novidades'} disableRipple required />}
            />
            <FormControlLabel
                label="Promoções"
                control={<Switch color="primary" name={'Promoções'} disableRipple required />}
            />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    );
}


export default FormularioCadastro;