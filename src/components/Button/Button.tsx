import { FC } from 'react'
import  './styles.css'

interface ButtonProps {
    handleClick: () => void
}

const Button:FC<ButtonProps>  = ({ handleClick }) => {
    return (
        <button className='button' onClick={handleClick}>Get Today's Events</button>
    )
}


export default Button