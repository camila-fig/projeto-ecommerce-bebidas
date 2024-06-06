import { Sale } from "../sale/sale"
import { CategoriesPreview } from "../../components/categories-preview/categories-preview"

export function Home() {
return (
    <>
    <h4 className='categories-preview-title'>MAIS VENDIDOS</h4>
    <CategoriesPreview />
    <Sale />
    </>
)    
}