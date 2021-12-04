import React, { useContext, useEffect } from "react"
import { DistributorContext } from "../distributor/DistributorProvider";
import { FlowerContext } from "../flower/FlowerProvider";
import { NurseryDistributorContext } from "../nurserydistributor/NurseryDistributorProvider";
import { NurseryFlowerContext } from "../nurseryflower/NurseryFlowerProvider";
import { NurseryCard } from "./NurseryCard";
import { NurseryContext } from "./NurseryProvider"

export const NurseryList = () => {
  const { 
    nurseries, 
    getNurseries 
  } = useContext(NurseryContext);
  const { 
    nurseryDistributors,
    getNurseryDistributors 
  } = useContext(NurseryDistributorContext);
  const { 
    nurseryFlowers, 
    getNurseryFlowers 
  } = useContext(NurseryFlowerContext);
  const { getDistributors } = useContext(DistributorContext);
  const { getFlowers } = useContext(FlowerContext);
  
  useEffect(() => {
    getNurseries()
    .then(getFlowers)
    .then(getDistributors)
    .then(getNurseryFlowers)
    .then(getNurseryDistributors);
  }, []);

  return (
    <>
      {
        nurseries.map(nursery => {
          const nurserysFlowers = nurseryFlowers.filter(nf => nursery.id === nf.nurseryId);
          const nurserysDistributors = nurseryDistributors.filter(nd => nursery.id === nd.nurseryId);
          return (
            <NurseryCard 
              key={nursery.id} 
              nursery={nursery}
              distributors={nurserysDistributors}
              flowers={nurserysFlowers} />
          )
        })
      }
    </>
  )
}