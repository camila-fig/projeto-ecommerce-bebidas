import { CategoriesPreview } from "../../components/categories-preview/categories-preview";
import './shop.scss'

export function Shop() {
    return(
        <div className="categories-preview-container">
        <h4 className='categories-preview-title'>MAIS VENDIDOS</h4>
        <CategoriesPreview />
        <br />
        </div>
    )
}