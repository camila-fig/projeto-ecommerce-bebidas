import './checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Footer } from '../../components/footer/footer'
import { Button } from '../../components/button/button'
import { CheckoutPreview } from '../../components/checkout-preview/checkout-preview'
import { UserContext } from '../../context/userContext'
import { NavLink } from 'react-router-dom'

export function Checkout() {

    const { cartTotal } = useContext(CartContext)
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <CheckoutPreview />
            {!currentUser &&
                <div className='checkout-total-container'>
                    <div className='checkout-total'>
                        <NavLink to='/auth'>
                            <div className='btn-logar'>entre na sua conta para finalizar o pedido ou cadastre-se</div>
                        </NavLink>
                        <span className='checkout-total-value'> TOTAL: R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</span >
                    </div>
                </div>}

            {currentUser &&
                <div className='checkout-total-container'>
                    <div className='checkout-total'>
                        <div>
                            <Button type="button" typeButton="checkout">pagamento</Button>
                        </div>
                        <span className='checkout-total-value'> TOTAL: R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</span >
                    </div>
                </div>}
            <Footer />
        </>
    )
}