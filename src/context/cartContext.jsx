import { useState } from "react";
import { createContext } from "react";


//Funções que não serão exportadas:
const addCartItem = (cartItems, productToAdd) => {
    //verificar se existe o produto já no carrinho  
    const existingCartItem = cartItems.find(  
      (cartItem) => cartItem.id === productToAdd.id  
    )  
    //se encontar incrementa a quantidade  
    if (existingCartItem) {  
      return cartItems.map((cartItem) =>   
        cartItem.id === productToAdd.id   
        ? {...cartItem, quantity: cartItem.quantity + 1 }  
        : cartItem  
      )  
    } 
    return [...cartItems, { ...productToAdd, quantity: 1 }]  
  }


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    // Este console.log verifica se o clique no carrinho está funcionando (false ou true)
    // console.log(isCartOpen)

    const [cartItems, setCartItems] = useState([])
    // Este console.log atualiza o cartItems qdo clico em comprar.
    console.log(cartItems)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems,
        addItemToCart 
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
