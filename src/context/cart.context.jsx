import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, serviceToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === serviceToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === serviceToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem);
    }

    return [...cartItems, {...serviceToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (service) => {
        setCartItems(addCartItem(cartItems, service));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount };

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    );
}