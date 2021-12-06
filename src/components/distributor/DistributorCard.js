import { markupPrice } from "./helper/markup";

export const DistributorCard = ({ distributor, flowers, retailers }) => (
  <section>
    <h2>{distributor.name}</h2>
    <h3>Flowers</h3>
    {
      flowers.map(flower => <div key={flower.id}>{flower.species} ${markupPrice(flower.price, distributor.markupPercentage)}</div>)
    }
    <h3>Retailers</h3>
    {
      retailers.map(retailer => <div>{retailer.name}</div>)
    }
  </section>
)