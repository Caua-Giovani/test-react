import { useState } from "react"

function UseStateHook(){
    const [nome, setNome] = useState('Clique em mudar')
    const [idade, setIdade] = useState(0)
    const [eFalso, seteFalso] = useState(false)


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
        </>
    )
}

export default UseStateHook


// const [contador, setContador] = useState(0)

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