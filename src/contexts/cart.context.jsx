import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
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

export const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
}

export const decreaseCartItem = (cartItems, productToDecrease) => {
  const updatedCartItems = cartItems.map((item) => item.id === productToDecrease.id ? {...item, quantity: item.quantity - 1 } : item)
  return updatedCartItems.filter(item => item.quantity !== 0);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decreaseQuantity: () => {},
  deleteItem: () => {},
  quantity: 0
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setQuantity(newCartCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const deleteItem = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  }

  const decreaseQuantity = (productToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, productToDecrease));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, deleteItem, decreaseQuantity, quantity };
  return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}
