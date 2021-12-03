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
        <Formulario />

      </Container>

    </>
  );
}

export default App;
