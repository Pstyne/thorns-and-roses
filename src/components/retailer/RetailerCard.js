import { markupRetailPrice } from "./helper/markup";

export const RetailerCard = ({ retailer, flowers, nurseries }) => {
  return (
    <>
      <h2>{retailer.name}</h2>
      <address>{retailer.address}</address>
      <h3>Flowers</h3>
      {
        flowers.map(flower => {
          return (
          <div key={flower.id}>
            {flower.name} ({flower.color}) ${markupRetailPrice(flower.price, retailer.markupPercentage, retailer.distributor.markupPercentage)}
            <button>Purchase</button>
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