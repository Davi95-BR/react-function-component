import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';


function DadosEntrega({ aoEnviar, }) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const classes = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    
    const estados = [
        {value: 'SP', label: 'SP',}, {value: 'RJ', label: 'RJ',},
        {value: 'AC', label: 'AC',}, {value: 'AL', label: 'AL',},
        {value: 'AP', label: 'AP',}, {value: 'AM', label: 'AM',},
        {value: 'BA', label: 'BA',}, {value: 'CE', label: 'CE',},
        {value: 'DF', label: 'DF',}, {value: 'ES', label: 'ES',},
        {value: 'GO', label: 'GO',}, {value: 'MA', label: 'MA',},
        {value: 'MT', label: 'MT',}, {value: 'MS', label: 'MS',},
        {value: 'MG', label: 'MG',}, {value: 'PA', label: 'PA',},
        {value: 'PB', label: 'PB', },{value: 'PR', label: 'PR',},
        {value: 'PE', label: 'PE',}, {value: 'PI', label: 'PI',},
        {value: 'RR', label: 'RR',}, {value: 'RO', label: 'RO',},
        {value: 'RN', label: 'RN',}, {value: 'RS', label: 'RS',},
        {value: 'SC', label: 'SC',}, {value: 'SE', label: 'SE',}, {value: 'TO', label: 'TO',},
      ];
     

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
                className={classes.root}
                 noValidate autoComplete="off"
            >
                <Typography color="primary" align="left" variant="h5" component="h1">Dados de entrega</Typography>
                <TextField
                    value={cep}
                    onChange={(event) => {
                        setCep(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    label="CEP" type="number" id="cep" variant="outlined" margin="normal" fullWidth required
                />

                <TextField
                    value={endereco}
                    onChange={(event) => {
                        setEndereco(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    label="endereço" type="text" id="endereco" variant="outlined" margin="normal" fullWidth required
                />

                <TextField
                    value={numero}
                    onChange={(event) => {
                        setNumero(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    label="número" type="number" id="numero" variant="outlined" margin="normal" required
                />

                <TextField
                    value={cidade}
                    onChange={(event) => {
                        setCidade(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    label="cidade" type="text" id="cidade" variant="outlined" margin="normal" placeholder="Digite sua cidade natal" required
                />

                <TextField
                    value={estado}
                    id="estado"
                    select
                    label="estado"
                    onChange={(event) => {
                        setEstado(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                >
                
                {estados.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                </TextField>


                <Button color="primary" type="submit" variant="contained" fullWidth > Finalizar Cadastro</Button>
            </form>
        </Box>
    );
}



export default DadosEntrega;