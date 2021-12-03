import React from 'react'
import './Formulario.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'


function Formulario() {
    return (
        <>

            <form method="post">
                <TextField id="Nome" label="Nome" variant="outlined" fullWidth margin='normal' />


                <TextField id="SobreNome" label="Sobre Nome" variant="outlined" fullWidth margin='normal' />

                <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin='normal' />

                <FormControlLabel label="Promoções" control={<Switch name="Promocoes" defaultChecked color='primary' />} />

                <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked color='primary' />} />

                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant='contained' color='primary' > Cadastrar</Button>
                </Box>

            </form>
        </>
    )
}

export default Formulario
