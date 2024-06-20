import "./cart-dropdown.scss"
import { Button } from "../button/button"
import { CartItem } from "../cart-item/cart-item"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useNavigate } from "react-router-dom"
import Empty from "../../assets/beer-bottle.png"

export function CartDropdown() {

    const { cartItems, cartCount } = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckout = () => {
        navigate('/checkout')
    }

if (!cartCount) {
    return (
        <div className="cart-dropdown-container-empty">
        <img className="cart-dropdown-image-empty" src={Empty} alt="Carrinho vazio" />
        <p>Seu carrinho de compras está vazio.</p>
        <p>Adicione produtos.</p>
        </div>
    )
} else {
    return (
        <div className="cart-dropdown-container">
            <p className="cart-dropdown-title">Seu carrinho:</p>
            <div className="cart-dropdown-subtitle">
                <span className="cart-dropdown-produto">Produto</span>
                <span className="cart-dropdown-valor">Valor</span>
                <span className="cart-dropdown-total">Subtotal</span>
            </div>
            <div className="cart-dropdown-item">
                {
                    cartItems.map(item => (
                        <CartItem cartItem={item} key={item.id} />
                    ))
                }
            </div>
            <div >
                <Button onClick={goToCheckout}>Verificar pedido</Button>
            </div>
        </div>
    )}
}