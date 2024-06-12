import './checkout-item.scss'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function CheckoutItem({ cartItem }) {
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { image, name, promotionPrice, quantity } = cartItem

    const clearItem = () => clearItemToCart(cartItem)
    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <span>{name}</span>
            <span>
                <div onClick={removeItem}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={addItem}>
                    &#10095;
                </div>
            </span>
            <span>{promotionPrice}</span>
            <div onClick={clearItem}>
                &#10005;
            </div>
        </div>
    )
}