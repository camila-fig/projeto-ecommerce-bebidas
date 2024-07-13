import './search.scss'
import { useState } from "react";
import { SHOP_DATA } from "../../shop-data"
import nav_search from '../../assets/magnifying-glass-bold.svg'

export function Search() {

    //Une as categorias e cria um array apenas com os produtos do arquivo shop-data.js
    const products = SHOP_DATA[0].items.concat(SHOP_DATA[1].items)
    // console.log(products)

    //Mecanismo de busca
    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const productsFiltered = products
        .filter((product) => product.name.toLowerCase().includes(lowerSearch))
    // console.log(productsFiltered)

    const searchResults = productsFiltered.map((product) => (
        <li key={product.id}>
            <span>{product.name}</span>
        </li>))

    return (
        <>
            <div>
                <div>
                    <input
                        className='search-text'
                        type="search"
                        placeholder='o que está buscando hoje?'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img className='search-icon' src={nav_search} alt="" />
                </div>
                <div className="search-results">
                    <ul style={{ display: !search ? 'none' : 'grid' }}>{searchResults}</ul>
                </div>
            </div>
        </>
    )
}