import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    // Este console.log verifica se o clique no carrinho está funcionando (false ou true)
    // console.log(isCartOpen)
    const value = { isCartOpen, setIsCartOpen }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
