import React, { useContext, useEffect } from "react"
import { DistributorContext } from "../distributor/DistributorProvider";
import { FlowerContext } from "../flower/FlowerProvider";
import { NurseryContext } from "../nursery/NurseryProvider";
import { NurseryDistributorContext } from "../nurserydistributor/NurseryDistributorProvider";
import { NurseryFlowerContext } from "../nurseryflower/NurseryFlowerProvider";
import { RetailerContext } from "../retailer/RetailerProvider";
import { DistributorCard } from "./DistributorCard";

export const DistributorList = () => {
  const { 
    distributors, 
    getDistributors 
  } = useContext(DistributorContext);
  const { 
    nurseryDistributors,
    getNurseryDistributors 
  } = useContext(NurseryDistributorContext);
  const { 
    nurseryFlowers, 
    getNurseryFlowers 
  } = useContext(NurseryFlowerContext);
  const { getFlowers } = useContext(FlowerContext);
  const { getNurseries } = useContext(NurseryContext);
  const { retailers, getRetailers } = useContext(RetailerContext);
  
  useEffect(() => {
    getDistributors()
    .then(getNurseries)
    .then(getFlowers)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers)
    .then(getRetailers);
  }, []);

  return (
    <>
      {
        distributors.map(distributor => {
          const flowers = [];
          const nurserysDistributors = nurseryDistributors.filter(nd => distributor.id === nd.distributorId);
          nurserysDistributors.forEach(nd => {
            nurseryFlowers.forEach(nf => {
              if (nd.nurseryId === nf.nurseryId) {
                flowers.push({...nf.flower, price: nf.price});
              }
            });
          });

          const distributorRetailers = retailers.filter(retailer => retailer.distributorId === distributor.id);
          console.log(flowers)
          return (
            <DistributorCard 
              key={distributor.id} 
              distributor={distributor}
              flowers={flowers}
              retailers={distributorRetailers} />
          )
        })
      }
    </>
  )
}