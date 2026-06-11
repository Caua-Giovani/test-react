import styles from './button.module.css'

function Button(props) {
    return(
        <>
            <button className='button'>{props.texto}</button>
        </>
    )
}

export default Button