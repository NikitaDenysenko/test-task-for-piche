import { FC } from 'react'

interface ButtonProps {
    handleClick: () => void
}

const Button:FC<ButtonProps>  = ({ handleClick }) => {
    return (
        <button onClick={handleClick}>Get Today's Events</button>
    )
}


export default Button