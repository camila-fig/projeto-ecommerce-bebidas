import "./cart-item.scss"
import dilute from "../../assets/dilute.png"

export function CartItem() {
    return (
        <div className="cart-item-container">
            <div className="cart-item-container-product">
                <img className="cart-item-image" src={dilute} alt="Imagem do produto" />
                <div className="cart-item-details">
                    <span className="cart-item-name">Produto 1 xxxxx xxxxxx</span>
                    <span className="cart-item-price">3 x R$ 20,00</span>
                    <span className="cart-item-quantity">3</span>
                </div>
                </div>
        </div>
    )
}