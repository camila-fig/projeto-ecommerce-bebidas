import "./cart-dropdown.scss"
import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"

export function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <p className="cart-dropdown-title">Seu carrinho:</p>
            <div className="cart-dropdown-item">
                <CartItem />
            </div>
            <div >
                <Button>Finalizar</Button>
            </div>
        </div>
    )
}