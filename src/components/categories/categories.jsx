import { NavLink } from "react-router-dom"
import { Category } from "../category/category"
import './categories.scss'

export function Categories( { categories}) {
    return (
        <div className="categories-container">
           {
            categories.map((category) => {
                return (
                    <NavLink to={`shop/${category.title.toLowerCase()}`}>
                    <Category category={category} key={category.title} />
                    </NavLink>
                )
            })
           }
        </div>
    )
}