import { useContext } from "react";
import { useEffect } from "react";
import { FlowerContext } from "../flower/FlowerProvider";
import { NurseryContext } from "../nursery/NurseryProvider";
import { NurseryDistributorContext } from "../nurserydistributor/NurseryDistributorProvider";
import { NurseryFlowerContext } from "../nurseryflower/NurseryFlowerProvider";
import { RetailerCard } from "./RetailerCard";
import { RetailerContext } from "./RetailerProvider";



export const RetailerList = () => {
  const { retailers, getRetailers } = useContext(RetailerContext);
  const { getFlowers } = useContext(FlowerContext);
  const { getNurseries } = useContext(NurseryContext);
  const { nurseryDistributors, getNurseryDistributors } = useContext(NurseryDistributorContext);
  const { nurseryFlowers, getNurseryFlowers } = useContext(NurseryFlowerContext); 

  useEffect(() => {
    getRetailers()
    .then(getFlowers)
    .then(getNurseries)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers);

  }, []);

  return (
    <>
    {
      retailers.map(retailer => {
        // Get associated nurseries of the retailer with distributor and chain map that array to get the nurseries
        const nurseries = nurseryDistributors.filter(nd => retailer.distributorId === nd.distributorId).map(nd => nd.nursery);
        // Get associated flowers of the nursery then chain map to get the nursery and price in return statement
        const flowers = nurseryFlowers.filter(nf => nurseries.find(n => n.id === nf.nurseryId)).map(nf => { 
          return { ...nf.flower, price: nf.price }
        });

        return(
          <RetailerCard 
            key={retailer.id}
            retailer={retailer} 
            nurseries={nurseries}
            flowers={flowers} />
        );
      })
    }
    </>
  );
}