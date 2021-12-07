import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "./ShoppingCartProvider";

export const ShoppingCart = () => {
  const { cart, getCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    getCart()
  }, []);

  return (
    
    cart.length ? cart.map(item => {
      return ( 
      <div key={item.id}>
        {console.log(item)}
        <div>{item.flower.name} ({item.flower.color})</div>
        <div>{item.price}</div>
      </div>
      );
    }) : 'No items in cart'
  );
}