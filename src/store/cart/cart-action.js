import { CART_ACTION_TYPES } from "./cart-types";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if(existingItem) {
    return (
      cartItems.map((item) => {
        if(item.id === productToAdd.id) {
          return {...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      })
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
}

const decreaseCartItem = (cartItems, productToDecrease) => {
  const updatedCartItems = cartItems.map((item) => item.id === productToDecrease.id ? {...item, quantity: item.quantity - 1 } : item)
  return updatedCartItems.filter(item => item.quantity !== 0);
}


export const setIsCartOpen = (boolean) => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean }
}

export const addItemToCart = (cartItems, itemToAdd) => {
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: addCartItem(cartItems, itemToAdd)}
}

export const deleteItem = (cartItems, itemToDelete) => {
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: deleteCartItem(cartItems, itemToDelete) }
}

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: decreaseCartItem(cartItems, itemToDecrease) }
}
