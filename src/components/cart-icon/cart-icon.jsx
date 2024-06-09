import './cart-icon.scss'
import ShoppingIcon from '../../assets/shopping-cart-simple-bold.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export function CartIcon() {
const { isCartOpen, setIsCartOpen } = useContext(CartContext)

const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <img className='cart-icon-logo' src={ShoppingIcon} alt="Icone do carrinho" />
            <p>2</p>            
        </div>
    )
}