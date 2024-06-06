import "./category-shop.scss"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCard } from "../product-card/product-card"

export function CategoryShop() {
    const { category } = useParams()

    const [categoriesMap, setCategoriesMap] = useState({})
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategories()
    }, [])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <div className="category-shopp">
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}