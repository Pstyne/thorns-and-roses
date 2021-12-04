import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const DistributorContext = createContext();

export const DistributorProvider = (props) => {
  
  const [distributors, setDistributors] = useState([]);

  const getDistributors = () => {
    return fetch(urlBuilder('distributors'))
    .then(res => res.json())
    .then(setDistributors);
  }

  const addDistributor = distributor => {
    return fetch(urlBuilder('distributors'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(distributor)
    }).then(getDistributors);
  }

  return (
    <DistributorContext.Provider value={{
      distributors, getDistributors, addDistributor
    }}>
      {props.children}
    </DistributorContext.Provider>
  );
}