import logo from '../../assets/cheers-logo.svg'
import nav_favorite from '../../assets/heart-bold.svg'
import nav_login from '../../assets/sign-in-bold.svg'
import nav_search from '../../assets/magnifying-glass-bold.svg'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'
import { NavLink, Outlet } from 'react-router-dom'

export function Navigation() {
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
                <NavLink to='/auth' className="icon-container">
                    <img className='nav-icon' src={nav_login} alt="" />
                    <div className="nav-link">Entrar</div>
                </NavLink>
                <CartIcon />
            </div>
            <Outlet />
        </>
    )
}