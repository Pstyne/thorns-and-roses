import { useContext } from "react";
import { ShoppingCartContext } from "../shoppingcart/ShoppingCartProvider";
import { markupRetailPrice } from "./helper/markup";

export const RetailerCard = ({ retailer, flowers, nurseries }) => {
  const { addToCart } = useContext(ShoppingCartContext);
  
  const createCartItem = (flowerId, price) => {    
    return addToCart({ 
      customerId: parseInt(localStorage.getItem('thorns_roses_customer')),
      retailerId: retailer.id,
      flowerId: flowerId,
      price
    });
  }

  return (
    <>
      <h2>{retailer.name}</h2>
      <address>{retailer.address}</address>
      <h3>Flowers</h3>
      {
        flowers.map(flower => {

          // Add markup price to each flower
          const totalMarkupFlowerPrice = parseFloat(markupRetailPrice(flower.price, retailer.markupPercentage, retailer.distributor.markupPercentage));

          return (
          <div key={flower.id}>
            {flower.name} ({flower.color}) ${totalMarkupFlowerPrice}
            <button onClick={() => createCartItem(flower.id, totalMarkupFlowerPrice)}>Purchase</button>
          </div>
        )})
      }
      <h3>Distributor</h3>
      <div>{retailer.distributor?.name}</div>
      <h3>Nurseries</h3>
      {
        nurseries.map(nursery => <div key={nursery.id}>{nursery.name}</div>)
      }
    </>
  );
}