import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';

function FormularioCadastro() {
    return (
        <form>
            <TextField variant="outlined" id="Nome" label="Nome" fullWidth margin="normal" required />
            <TextField variant="outlined" id="Sobrenome" label="Sobrenome" fullWidth margin="normal" required />
            <TextField variant="outlined" id="CPF" label="CPF" fullWidth margin="normal" required />

            <label>Promoções</label>
            <Checkbox
                defaultChecked
                color="secundary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                required
            />

            <label>Novidades</label>
            <Checkbox
                defaultChecked
                color="secundary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="secundary"
            >Enviar Formulário
            </Button>
        </form>
    );
}


export default FormularioCadastro;