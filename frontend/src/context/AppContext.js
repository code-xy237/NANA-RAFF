import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }){
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')||'[]'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')||'null'));
  useEffect(()=> localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(()=> localStorage.setItem('user', JSON.stringify(user)), [user]);

  const addToCart = (product, qty=1) => {
    setCart(prev=>{
      const idx = prev.findIndex(p=>p.id===product.id);
      if(idx>-1){ prev[idx].qty += qty; return [...prev]; }
      return [...prev, { id: product.id, product, qty }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(x=>x.id!==id));
  const clearCart = ()=> setCart([]);
  return <AppContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, user, setUser }}>{children}</AppContext.Provider>;
}
