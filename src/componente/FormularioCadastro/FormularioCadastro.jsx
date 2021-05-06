import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

function FormularioCadastro() {
    return (
        <form>
            <TextField variant="outlined"  id="Nome" label="Nome" fullWidth required/>
            <TextField variant="outlined" id="Sobrenome" label="Sobrenome" fullWidth required/>
            <TextField variant="outlined" id="CPF" label="CPF" fullWidth required/>

            <label>Promoções</label>
            <input type="checkbox" />

            <label>Novidades</label>
            <input type="checkbox" />

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

