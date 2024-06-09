import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"

export function CartDropdown() {
    return(
        <div>
            <div>
            <CartItem />
            </div>
            <Button>Finalizar</Button>
        </div>
    )
}