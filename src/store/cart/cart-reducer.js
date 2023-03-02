import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartOpen: false,
  cartItems: [],
}

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

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    deleteItem(state,action) {
      state.cartItems = deleteCartItem(state.cartItems, action.payload)
    },
    decreaseQuantity(state, action) {
      state.cartItems = decreaseCartItem(state.cartItems, action.payload)
    }
  }
})

export const { setIsCartOpen, addItemToCart, deleteItem, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


// OLD VERSION WITHOUT TOOLKIT

// export const cartReducer = (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: action.payload
//       }
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: action.payload
//       }
//     default:
//       return state;
//   }
// }
