import styles from "./contador.module.css"
import { useState } from "react"


function Contador(){
    const [contador, setContador] = useState(0)

    const adicionar = () =>{
        setContador(contador+1)
    }
    const reiniciar = () =>{
        setContador(0)
    }
    const subtrair = () =>{
        setContador(contador-1)
    }
    const sortear = () =>{
        setContador(Math.floor(Math.random() * 50))
    }


    return(
        <>
            <p style={{color:contador == 0 ? 'black': contador > 0 ? 'green' : 'red' }}>{contador}</p>
            <button onClick={reiniciar} >Reiniciar</button>
            <button onClick={adicionar} >Acrescentar</button>
            <button onClick={subtrair} >Subtrair</button>
            <button onClick={sortear} >Sortear</button>
        </>
    )
}


export default Contador