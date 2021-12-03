import React, { useState } from 'react'
import './Formulario.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'


function Formulario() {
    const [Nome, setNome] = useState();
    const [SobreNome, setSobreNome] = useState(" ")

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(Nome);
        console.log(SobreNome)
    }

    return (
        <>

            <form method="post" onSubmit={onSubmit}>
                <TextField id="Nome" label="Nome" variant="outlined" fullWidth margin='normal'
                    onChange={(event) => { setNome(event.target.value) }} />

                <TextField id="SobreNome" label="Sobre Nome" variant="outlined" fullWidth margin='normal'
                onChange={(event) => { setSobreNome(event.target.value) }} />
                <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin='normal' />

                <FormControlLabel label="Promoções" control={<Switch name="Promocoes" defaultChecked color='primary' />} />

                <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked color='primary' />} />

                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant='contained' type="submit" color='primary' > Cadastrar</Button>
                </Box>

            </form>
        </>
    )
}

export default Formulario
