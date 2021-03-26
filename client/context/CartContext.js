import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const itemAllreadyInCart = cartItems.find(
      (cartItem) => cartItem._id === product._id && cartItem.size === product.size
    );
    if (itemAllreadyInCart) {
      const cartProduct = cartItems.map((cartItem) => {
        if (cartItem._id === product._id && cartItem.size === product.size) {
          return {
            ...product,
            quantity: cartItem.quantity + 1
          };
        }
        return cartItem;
      });
      setCartItems(cartProduct);
    } else {
      const newProduct = {
        ...product,
        quantity: 1
      };
      setCartItems([...cartItems, newProduct]);
    }
  };

  const decrementItemFromCart = (id, size) => {
    const itemsInCart = cartItems.map((cartItem) => {
      if (cartItem._id === id && cartItem.size === size) {
        if (cartItem.quantity > 1) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          };
        }
      }
      return cartItem;
    });

    setCartItems(itemsInCart);
  };

  const incrementItemFromCart = (id, size) => {
    const itemsInCart = cartItems.map((cartItem) => {
      if (cartItem._id === id && cartItem.size === size) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      }
      return cartItem;
    });

    setCartItems(itemsInCart);
  };

  const removeItemFromCart = (id, size) => {
    const itemsInCart = cartItems.filter((cartItem) => {
      return !(cartItem._id === id && cartItem.size === size);
    });
    setCartItems(itemsInCart);
  };

  const totalPrice = () =>
    cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        cartItems,
        totalPrice,
        decrementItemFromCart,
        incrementItemFromCart
      }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return ctx;
};

export { CartProvider };
