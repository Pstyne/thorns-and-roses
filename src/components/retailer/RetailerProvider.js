import React, { createContext, useState } from "react";
import { urlBuilder } from "../../helpers/urlBuilder";

export const RetailerContext = createContext();

export const RetailerProvider = (props) => {
  
  const [retailers, setRetailers] = useState([]);

  const getRetailers = () => {
    return fetch(urlBuilder('retailers?_expand=distributor'))
    .then(res => res.json())
    .then(setRetailers);
  }

  const addRetailer = retailer => {
    return fetch(urlBuilder('retailers'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(retailer)
    }).then(getRetailers);
  }

  return (
    <RetailerContext.Provider value={{
      retailers, getRetailers, addRetailer
    }}>
      {props.children}
    </RetailerContext.Provider>
  );
}