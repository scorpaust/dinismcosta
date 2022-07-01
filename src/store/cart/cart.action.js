import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, serviceToAdd) => {
    const newCartItems = addCartItem(cartItems, serviceToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const removeItemFromCart = (cartItems, serviceToRemove) => {
    const newCartItems = removeCartItem(cartItems, serviceToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, serviceToClear) => {
    const newCartItems = clearCartItem(cartItems, serviceToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

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