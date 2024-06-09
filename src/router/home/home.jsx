import { Sale } from "../sale/sale"
import { CategoriesPreview } from "../../components/categories-preview/categories-preview"
import { Footer } from "../../components/footer/footer"

export function Home() {
return (
    <>
    <p className='categories-preview-title'>Mais Vendidos</p>
    <div className="categories-preview-products">
    <CategoriesPreview />
    </div>
    <Sale />
    <Footer />
    </>
)    
}