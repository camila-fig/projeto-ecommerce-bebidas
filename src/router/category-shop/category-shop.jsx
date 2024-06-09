import "./category-shop.scss"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../../components/product-card/product-card"
import { CategoriesContext } from "../../context/categoriesContext"


export function CategoryShop() {
    const { category } = useParams()

    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <p className="category-title">{category}</p>
            <div className="category-shopp">
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}