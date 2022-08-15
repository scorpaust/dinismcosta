import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], serviceToAdd: CartItem) => {
    const newCartItems = addCartItem(cartItems, serviceToAdd);
    return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], serviceToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, serviceToRemove);
    return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], serviceToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, serviceToClear);
    return setCartItems(newCartItems);
}

const addCartItem = (cartItems: CartItem[], serviceToAdd: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === serviceToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === serviceToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem);
    }

    return [...cartItems, {...serviceToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem && existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem);

}

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;