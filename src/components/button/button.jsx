import { useState } from 'react'
import './button.scss'

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export function Button({ children, typeButton, ...otherProps }) {
    return (
        <button
            {...otherProps}
            className={`${BUTTON_TYPE_CLASS[typeButton]}`}>
            {children}
        </button >
    )
}


export function ButtonBuy() {

    const [number, setNumber] = useState(0)

    function add() {
        setNumber(number + 1)
    }
    function reduce() {
        setNumber(number - 1)
    }

    return (
        <div className='button-buy-container'>
            <button className='button-add-remove' onClick={reduce}>-</button>
            <p className='button-result'>{number}</p >
            <button className='button-add-remove' onClick={add}>+</button>
        </div>
    )
}