import './navigation.scss'
import logo from '../../assets/cheers-logo.svg'
import nav_favorite from '../../assets/heart-bold.svg'
import nav_login from '../../assets/sign-in-bold.svg'
import nav_logout from '../../assets/sign-out-bold.svg'
import nav_search from '../../assets/magnifying-glass-bold.svg'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import { NavLink, Outlet } from 'react-router-dom'
import { Categories } from '../../components/categories/categories'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'
import { signOutAuthUser } from '../../utils/firebase'

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

export function Navigation() {

    // Para abrir o modal do carrinho.
    const { isCartOpen } = useContext(CartContext)

    //Para saber se está logado
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <div className="navigation">
                <NavLink to='/' className="logo-container">
                    <div>
                        <img className='logo' src={logo} alt="Logo da loja" />
                    </div>
                    <p className="celebrar-title">Celebrar</p>
                    <p className="celebrar-subtitle">Casa de Bebidas</p>
                </NavLink>
                <div className='nav-search'>
                    <input className='nav-search-text' type="search" placeholder='o que está buscando hoje?' />
                    <img className='nav-icon-search' src={nav_search} alt="" />
                </div>
                <NavLink to='/favorite' className="icon-container">
                    <img className='nav-icon' src={nav_favorite} alt="" />
                    <div className="nav-link">Favoritos</div>
                </NavLink>
                {
                    currentUser ? (
                        <NavLink className="icon-container" onClick={signOutAuthUser}>
                            <img className='nav-icon' src={nav_logout} alt="" />
                            <div className="nav-link">Sair</div>
                        </NavLink>
                    ) : (
                        <NavLink to='/auth' className="icon-container">
                            <img className='nav-icon' src={nav_login} alt="" />
                            <div className="nav-link">Entrar</div>
                        </NavLink>
                    )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
            <Categories categories={categories} />
            <Outlet />
        </>
    )
}