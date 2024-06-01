import { useState } from 'react'
import './item-count.scss'

export function ItemCount({stock, initial, onAdd}) {

    const [number, setNumber] = useState(0)

    function add() {
        setNumber(number + 1)
    }
    function reduce() {
        setNumber(number - 1)
    }

    return (
        <div className='button-buy-container'>
            <button className='button-add-remove' onClick={reduce} disabled={number === 0}>-</button>
            <p className='button-result'>{number}</p >
            <button className='button-add-remove' onClick={add} disabled={number === stock}>+</button>
        </div>
    )
}