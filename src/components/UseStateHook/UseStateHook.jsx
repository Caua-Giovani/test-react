import { useState } from "react"

function UseStateHook(){
    const [nome, setNome] = useState('Clique em mudar')
    const [idade, setIdade] = useState(0)
    const [eFalso, seteFalso] = useState(false)
    const [fruta, setFruta] = useState('Clique no mostrar')

    const mostrarFruta= () =>{
        setFruta('Abacaxi')
    }

    const atualizarNome= ()=>{
        setNome('Cauã');
    }

    const atualizarIdade= ()=>{
        setIdade(idade + 1);
    }

    const atualizarEstado= ()=>{
        seteFalso(!eFalso)
    }

    return(
        <>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome} >Mudar</button>

            <p>Idade: {idade}</p>
            <button onClick={atualizarIdade} >Incrementar</button>

            <p>É Falso: {eFalso ? "Sim" : "Não"}</p>
            <button onClick={atualizarEstado} >Verificar</button>

            <p>Fruta Secreta: {fruta}</p>
            <button onClick={mostrarFruta} >Mostrar</button>
        </>
    )
}

export default UseStateHook


// import styles from "./contador.module.css"
// import { useState } from "react"

// function Contador(){
//     const [contador, setContador] = useState(0)

//     const adicionar = () =>{
//         setContador(contador+1)
//     }
//     const reiniciar = () =>{
//         setContador(0)
//     }
//     const subtrair = () =>{
//         setContador(contador-1)
//     }

//     return(
//         <>
//             <p>{contador}</p>
//             <button onClick={adicionar} >Adicionar</button>
//             <button onClick={reiniciar} >Reiniciar</button>
//             <button onClick={subtrair} >Subtrair</button>
//         </>
//     )
// }

// export default Contador


