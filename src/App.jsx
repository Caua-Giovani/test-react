import Alunos from './components/Alunos/Alunos.jsx'
import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Lista from './components/Lista/Lista.jsx'

import './App.css'

function App() {


  return (
    <>
      <Alunos nome = "Teste" idade = '18'/>
      <Alunos nome = "Teste" idade = '18'/>
      <Button texto = "Teste"/>
      <Button texto = "Teste"/>
      <Card nome = "Teste" curso="desenvolvimento de sistemas"/>
    </>
  )
}

export default App
