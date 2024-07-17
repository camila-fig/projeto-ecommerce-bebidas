import './search.scss'
import nav_search from '../../assets/magnifying-glass-bold.svg';
import { useState } from "react";
import { SHOP_DATA } from "../../shop-data"
import { Link } from 'react-router-dom';

export function Search() {

    //Une as categorias e cria um array apenas com os produtos do arquivo shop-data.js
    const products = SHOP_DATA[0].items.concat(SHOP_DATA[1].items)
    // console.log("Produtos", products)

    //Mecanismo de busca
    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const productsFiltered = products
        .filter((product) => product.name.toLowerCase().includes(lowerSearch))
    // console.log("Filtrado", productsFiltered)

    return (
        <>
            <div>
                <div className='search-container'>
                    <input
                        className='search-text'
                        type="search"
                        placeholder='pesquisar um rótulo'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img className='search-icon' src={nav_search} alt="Pesquisar" />
                </div>
                <div className="search-results">
                    <ul style={{ display: !search ? 'none' : 'grid' }}>
                        {productsFiltered.map((product) => (
                            <li key={product.id}>
                                <Link to={`/product-detail/${product.id}`}>
                                    <span>{product.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}