import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    console.log(product);
  };

  const removeItemFromCart = (id) => {
    console.log(id);
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        cartItems
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
