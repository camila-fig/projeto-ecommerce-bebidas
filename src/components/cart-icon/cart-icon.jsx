import './cart-icon.scss'
import ShoppingIcon from '../../assets/shopping-cart-simple-bold.svg'

export function CartIcon() {
    return (
        <div className="cart-icon-container">
            <img className='cart-icon-logo' src={ShoppingIcon} alt="Icone do carrinho" />
            <p>2</p>            
        </div>
    )
}