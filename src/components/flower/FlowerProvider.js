import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const FlowerContext = createContext();

export const FlowerProvider = (props) => {
  
  const [flowers, setFlowers] = useState([]);

  const getFlowers = () => {
    return fetch(urlBuilder('flowers'))
    .then(res => res.json())
    .then(setFlowers);
  }

  const addFlower = flower => {
    return fetch(urlBuilder('flowers'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(flower)
    }).then(getFlowers);
  }

  return (
    <FlowerContext.Provider value={{
      flowers, getFlowers, addFlower
    }}>
      {props.children}
    </FlowerContext.Provider>
  );
}