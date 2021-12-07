import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { ShoppingCartContext } from "../shoppingcart/ShoppingCartProvider";

export const NavBar = () => {
  const { cart, getCart } = useContext(ShoppingCartContext);
  
  useEffect(() => {
    getCart();
  }, []);

  return (
    <ul>
      <li>
        <Link to="/">Thorns and Roses</Link>
      </li>
      <li>
        <Link to="/nurseries">Nurseries</Link>
      </li>
      <li>
        <Link to="/distributors">Distributors</Link>
      </li>
      <li>
        <Link to="/retailers">Retailers</Link>
      </li>
      <li>
        <Link to="/shoppingcart">Shopping Cart ({cart.length})</Link>
      </li>
    </ul>
  );
}