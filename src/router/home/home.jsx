import { Categories } from "../../components/categories/categories"

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
    <div>
    <Categories categories={categories} />
    </div>
)    
}