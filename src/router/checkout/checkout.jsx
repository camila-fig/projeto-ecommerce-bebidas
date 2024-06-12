import './checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { CheckoutItem } from '../../components/checkout-item/checkout-item'

export function Checkout() {

    const {cartItems, cartTotal} = useContext(CartContext)

    return (
    <div>
        <div className='checkout-header'>
            <div>
                <span>Produto</span>
            </div>
        </div>
        <div>
            <div>
                <span>Descrição</span>
            </div>
        </div>
        <div>
            <div>
                <span>Quantidade</span>
            </div>
        </div>
        <div>
            <div>
                <span>Preço</span>
            </div>
        </div>
        <div>
            <div>
                <span>Remover</span>
            </div>
        </div>
        {
cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
        }
        <span>Total: R${cartTotal}</span>
    </div>
    )
}