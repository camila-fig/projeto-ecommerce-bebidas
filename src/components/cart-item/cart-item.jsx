import "./cart-item.scss"

export function CartItem({ cartItem }) {

    const { image, name, promotionPrice, quantity } = cartItem
    const total = quantity * promotionPrice

    return (
        <div className="cart-item-container">
            <div className="cart-item-container-product">
                <img className="cart-item-image" src={image} alt="Imagem do produto" />
                <div className="cart-item-details">
                    <span className="cart-item-name">{name}</span>
                    <span className="cart-item-price">{quantity} x R$ {promotionPrice.toFixed(2).toString().replace(".", ",")}</span>
                    <span className="cart-item-quantity">R$ {total.toFixed(2).toString().replace(".", ",")}</span>
                </div>
            </div>
        </div>
    )
}