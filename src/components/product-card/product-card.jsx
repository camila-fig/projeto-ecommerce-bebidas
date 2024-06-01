import { Button } from "../button/button"
import { ItemCount } from "../item-count/item-count"
import './product-card.scss'


export function ProductCard({ product }) {

  const { name, price, promotionPrice, image } = product

  return (
    <div className='product-card-container'>
      <img src={image} alt={`${name}`} />
      <div className='product-description'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>R$ {price.toFixed(2).toString().replace(".", ",")}</p>
        <p className='product-promotion-price'>Por R$ {promotionPrice.toFixed(2).toString().replace(".", ",")}</p>
      </div>
      <div className="product-buttons">
      <ItemCount></ItemCount>
      <Button typeButton="inverted">Comprar</Button>
      </div>
    </div>
  )
}