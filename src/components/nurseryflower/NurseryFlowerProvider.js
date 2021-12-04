import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const NurseryFlowerContext = createContext();

export const NurseryFlowerProvider = (props) => {
  
  const [nurseryFlowers, setNurseryFlowers] = useState([]);

  const getNurseryFlowers = () => {
    return fetch(urlBuilder('nurseriesflowers?_expand=nursery&_expand=flower'))
    .then(res => res.json())
    .then(setNurseryFlowers);
  }

  const addNurseryFlower = nurseryFlower => {
    return fetch(urlBuilder('nurseriesflowers'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nurseryFlower)
    }).then(getNurseryFlowers);
  }

  return (
    <NurseryFlowerContext.Provider value={{
      nurseryFlowers, getNurseryFlowers, addNurseryFlower
    }}>
      {props.children}
    </NurseryFlowerContext.Provider>
  );
}