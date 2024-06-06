import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../../components/categories-preview/categories-preview";
import { CategoryShop } from "../../components/category-shop/category-shop";
import './shop.scss'

export function Shop() {
    return (
        <>
            <div className="categories-preview-container">
                <Routes>
                    <Route index element={<CategoriesPreview />} />
                    <Route path=":category" element={<CategoryShop />} />
                </Routes>
                <br />
            </div>
        </>
    )
}