import React, { useState } from 'react'
import './Formulario.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'


function Formulario({aoEnviar, validarCpf}) {
    const [Nome, setNome] = useState();
    const [SobreNome, setSobreNome] = useState(" ")
    const [Cpf, setCpf] = useState("")
    const [Promocoes, setPromocoes] = useState(true)
    const [Novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({cpf:{valido: true, texto: ""}})


    const onSubmit = (event) => {
        event.preventDefault();

        aoEnviar({Nome,SobreNome, Cpf, Promocoes, Novidades})
    }

    return (
        <>

            <form method="post" onSubmit={onSubmit}>
                <TextField id="Nome" label="Nome" variant="outlined" fullWidth margin='normal'
                    onChange={(event) => { setNome(event.target.value) }} />

                <TextField id="SobreNome" label="Sobre Nome" variant="outlined" fullWidth margin='normal'
                    onChange={(event) => { setSobreNome(event.target.value) }}  />

                <TextField id="cpf" value={Cpf} label="CPF" variant="outlined" fullWidth margin='normal'
                    onChange={(event) => { setCpf(event.target.value) }}
                    onBlur={(event)=>{
                        setErros(validarCpf(Cpf))

                        console.log(erros)
                    }}
                    error={!erros.cpf.valido} helperText={erros.cpf.texto}
                 />

                <FormControlLabel label="Promoções" checked={Promocoes} control={<Switch name="Promocoes" color='primary' onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} />} />

                <FormControlLabel
                    label="Novidades"
                    checked={Novidades}
                    control={<Switch name="Novidades"
                        color='primary'
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }} />} />

                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant='contained' type="submit" color='primary' > Cadastrar</Button>
                </Box>

            </form>
        </>
    )
}

export default Formulario
