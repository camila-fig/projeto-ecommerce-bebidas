import { useContext, useEffect } from "react"
import { CategoryPreview } from "../category-preview/category-preview"
import { CategoriesContext } from "../../context/categoriesContext"
import { addCollentionAdDocuments } from "../../utils/firebase"
import { SHOP_DATA } from "../../shop-data"

export function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext)

//Salva/atualiza o banco de dados do Firebase conforme meu arquivo shop-data
// useEffect(() => {
//   addCollentionAdDocuments('categories', SHOP_DATA)
// },[])

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}