import './checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'
import { Footer } from '../../components/footer/footer'

export function Checkout() {

    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <>
        <div className='checkout-container'>
            <div className='checkout-header'>
                <span>Produto</span>
                <span>Descrição</span>
                <span>Quantidade</span>
                <span>Subtotal</span>
                <span>Remover</span>
            </div>
            <div className='checkout-container-total'>
                {
                    cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
                }
                <div className='checkout-total'>
                <span className='checkout-total-value'> TOTAL: R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</span >
                </div>
            </div>
        </div >
        <Footer />
        </>
    )
}