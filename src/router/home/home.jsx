import { Sale } from "../sale/sale"
import { CategoriesPreview } from "../../components/categories-preview/categories-preview"

const categories = [
    {
        "id": 1,
        "title": "BEBIDAS ALCOÓLICAS"
    },
    {
        "id": 2,
        "title": "BEBIDAS NÃO ALCOÓLICAS"
    }
]

export function Home() {
return (
    <>
    <h4 className='categories-preview-title'>MAIS VENDIDOS</h4>
    <CategoriesPreview />
    <Sale />
    </>
)    
}