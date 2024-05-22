import logo from '../../assets/cheers-logo.svg'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className="navigation">
                <div className="logo-container">
                    <div>
                        <img className='logo' src={logo} alt="Logo da loja" />
                    </div>
                    <p className="celebrar-title">Celebrar</p>
                    <p className="celebrar-subtitle">Casa de Bebidas</p>
                </div>
                <div className="nav-link">BEBIDAS ALCOÓLICAS</div>
                <div className="nav-link">BEBIDAS NÃO ALCOÓLICAS</div>
                <div className="nav-link">LOGIN</div>
                <div className="nav-link">FAVORITOS</div>
                <CartIcon/>
            </div>
        </>
    )
}