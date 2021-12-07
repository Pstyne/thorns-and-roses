import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = (props) => {
  const [ cart, setCart ] = useState([]);
  
  const getCart = () => {
    return fetch(urlBuilder('shoppingcart'))
    .then(setCart);
  }

  const addToCart = product => {
    return fetch(urlBuilder('shoppingcart'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(getCart);
  }

  const removeFromCart = cartId => {
    return fetch(urlBuilder(`shoppingcart/${cartId}`), {
      method: "DELETE"
    }).then(getCart);
  }

  return (
    <ShoppingCartContext.Provider value={{
      getCart, addToCart, removeFromCart, cart
    }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}