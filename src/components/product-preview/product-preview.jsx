import './product-preview.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { useParams } from "react-router-dom";
import { SHOP_DATA } from '../../shop-data';

export function ProductPreview() {

    const { id: productId } = useParams()
    const products = SHOP_DATA[0].items.concat(SHOP_DATA[1].items)
    const product = products[productId]
    const { name, price, promotionPrice, image, description, stock } = product
    // console.log(products)

    const { addItemToCart, clearItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    const removeItem = () => clearItemToCart(product)

    const parcelado = price / 10

    return (
        <>
            <div className="product-preview-container">
                <div className='product-preview-detail'>
                    <img className='product-preview-image' src={image} alt={`${name}`} />
                    <p className='product-preview-title'>{name}</p>
                    <p className='product-preview-description'>Descrição {description}</p>
                    <p className='product-preview-price'>De R$ {price.toFixed(2).toString().replace(".", ",")}</p>
                    <p className='product-preview-promotion-price'>Por R$ {promotionPrice.toFixed(2).toString().replace(".", ",")}</p>
                    <p className='product-preview-parcelado'>Em até 10x de {parcelado.toFixed(2).toString().replace(".", ",")}, sem juros.</p>
                    <p className='product-preview-estoque'>Em estoque: {stock}</p>
                    <button className="product-btn-add" onClick={addProductToCart}>Adicionar ao carrinho</button>
                    <button className="product-btn-remove" onClick={removeItem}>Remover do carrinho</button>
                </div>
            </div>
        </>
    )
}