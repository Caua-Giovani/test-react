import styles from "./msgUsuario.module.css"

function MsgUsuario({autenticado=false,nomeUsuario}){

    return(
        autenticado === true ? <h1 className={styles.autenticado}>Bem Vindo, {nomeUsuario}</h1> : <h1 className={styles.naoAutenticado}>Usuario Não Logado</h1>
    )


    // if (autenticado === true){
    //     return(
            
    //         <p className={styles.welcome}>Bem Vindo, {nomeUsuario}</p>
            
    //     )
    // } else{
    //     return(
    //         <p className={styles.notAutenticated}>Usuario Não Logado</p>

    //     )
    

}

export default MsgUsuario
