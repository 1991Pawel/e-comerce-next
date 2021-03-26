import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // const addItemToCart = (product: Product) => {
  //   const inCart = cartItems.find((item) => item.id === product.id);
  //   const itemsInCart = [...cartItems];
  //   if (!inCart) {
  //     const newProduct = {
  //       ...product,
  //       quantity: 1,
  //     };
  //     setValue([...itemsInCart, newProduct]);
  //   } else {
  //     const newItems = cartItems.map((item) => {
  //       if (item.id === product.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         };
  //       }
  //       return item;
  //     });
  //     setValue(newItems);
  //   }
  // };

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

  const removeItemFromCart = (id) => {
    console.log(id);
  };

  const totalPrice = () => cartItems.reduce((acc, prev) => acc.price + prev.price, 0);

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        cartItems,
        totalPrice
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
