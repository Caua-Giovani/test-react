import Alunos from './components/Alunos/Alunos.jsx'
import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Lista from './components/Lista/Lista.jsx'
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx'

import './App.css'

function App() {

  const objeto = 
  {
    id: 1, 
    nome:'João'
  };

  const styles = 
  {
    containerFrutas: 'classe-azul',
    'container-legumes': 'classe-verde'
  };

  return (
    <>
      <p>Ponto:{objeto.nome}</p>
      <p>Colchete:{objeto["nome"]}</p>

      <p>Ponto:{styles.containerFrutas}</p>
      <p>Colchete:{styles['container-legumes']}</p>

      <MsgUsuario autenticado={true} nomeUsuario={"SENAI"}/>
      <MsgUsuario nomeUsuario={"SENAI"}/>

    </>
  )
}

export default App
