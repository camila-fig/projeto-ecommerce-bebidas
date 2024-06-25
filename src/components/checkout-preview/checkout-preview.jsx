import './checkout-preview.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'

export function CheckoutPreview() {

    const { cartItems } = useContext(CartContext)

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
                </div >
            </div >
        </>
    )
}