import './App.css';
import "fontsource-roboto";
import Formulario from './Components/formulario';
import { Container } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <>
      <Container component={"article"} maxWidth="xs">

        <Typography variant="h3" align='center' component="h1" color="initial">Formulario Cadastro</Typography>
        <Formulario aoEnviar={aoEnviarForm}validarCpf={validarCpf} />

      </Container>

    </>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf){

  let resultado = cpf.length!==11? {cpf:{valido: false, texto: "Digite um cpf de 11 caractere"}} : {cpf:{valido: true, texto: ""}} 

  console.log(resultado)
  return resultado;


}

export default App;
