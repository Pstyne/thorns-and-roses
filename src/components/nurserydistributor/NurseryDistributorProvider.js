import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const NurseryDistributorContext = createContext();

export const NurseryDistributorProvider = (props) => {
  
  const [nurseryDistributors, setNurseryDistributors] = useState([]);

  const getNurseryDistributors = () => {
    return fetch(urlBuilder('nurseriesdistributors?_expand=nursery&_expand=distributor'))
    .then(res => res.json())
    .then(setNurseryDistributors);
  }

  const addNurseryDistributor = nurseryDistributor => {
    return fetch(urlBuilder('nurseriesdistributors'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nurseryDistributor)
    }).then(getNurseryDistributors);
  }

  return (
    <NurseryDistributorContext.Provider value={{
      nurseryDistributors, getNurseryDistributors, addNurseryDistributor
    }}>
      {props.children}
    </NurseryDistributorContext.Provider>
  );
}