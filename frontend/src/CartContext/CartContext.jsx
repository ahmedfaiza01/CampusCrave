import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const totalItem = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItem }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook
export const useCart = () => useContext(CartContext);
