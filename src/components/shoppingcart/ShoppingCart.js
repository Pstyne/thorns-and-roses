import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartProvider";

export const ShoppingCart = () => {
  const { cart, getCart } = useContext(ShoppingCartContext);
  const [ aggregatedCart, setAggregatedCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    const aggCartMap = {};
    const aggCart = [];
    cart.forEach(item => {
      if (!aggCartMap[item.flowerId]) {
        aggCartMap[item.flowerId] = {
          id: item.flowerId,
          name: `${item.flower.name} (${item.flower.color})`,
          quantity: 1,
          price: item.price
        }
      } else {
        aggCartMap[item.flowerId].quantity++;
        parseFloat(aggCartMap[item.flowerId].price += aggCartMap[item.flowerId].price);
      }
    });

    for (const key in aggCartMap) {
      aggCart.push(aggCartMap[key]);
    }

    setAggregatedCart(aggCart);
  }, [cart, getCart]);

  return (
    
    aggregatedCart.length ? 
    <table>
      <thead>
        <tr>
          <td>Flower</td>
          <td>Quantity</td>
          <td>Cost</td>
        </tr>
      </thead>
      <tbody>
    {
      aggregatedCart.map(item => {
        return ( 
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        )
      }) 
    }
      </tbody>
    </table>
    
    : 'No items in cart'
  );
}