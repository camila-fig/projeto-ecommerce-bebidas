import './cart-icon.scss'
import ShoppingIcon from '../../assets/shopping-cart-simple-bold.svg'

export function CartIcon() {
    return (
        <div className="cart-icon-container">
            <span className='cart'>CARRINHO</span>
            <img className='cart-icon-logo' src={ShoppingIcon} alt="Icone do carrinho" />            
        </div>
    )
}