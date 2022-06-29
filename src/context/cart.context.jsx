import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, serviceToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === serviceToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === serviceToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem);
    }

    return [...cartItems, {...serviceToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem);

}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: true
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type)
    {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in the cartReducer`);
    }
}

export const CartProvider = ({ children }) => {

    /* const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]); */

    const [{ cartItems, isCartOpen, cartTotal, cartCount}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems, cartTotal: newCartTotal, cartCount: newCartCount}));
    }

    const addItemToCart = (serviceToAdd) => {
        const newCartItems = addCartItem(cartItems, serviceToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (serviceToRemove) => {
        const newCartItems = removeCartItem(removeCartItem(cartItems, serviceToRemove));
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (serviceToClear) => {
        const newCartItems = clearCartItem(cartItems, serviceToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal };

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    );
}