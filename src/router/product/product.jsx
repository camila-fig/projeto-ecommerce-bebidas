

export function Product(product) {

    const { name, price, promotionPrice, image, description, stock } = product

    return (
            <div className="categories-preview-container">
                <img src={image} alt={`${name}`} />
                <div className='product-description'>
                    <p className='product-name'>{name}</p>
                    <p className='product-promotion-price'>Descrição {description}</p>
                    <p className='product-price'>De R$ {price.toFixed(2).toString().replace(".", ",")}</p>
                    <p className='product-promotion-price'>Por R$ {promotionPrice.toFixed(2).toString().replace(".", ",")}</p>
                </div>
                <div>
                    <p className='product-promotion-price'>Em estoque: {stock}</p>
                </div>
            </div>
    )
}