import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { CustomerProvider } from "./components/customer/CustomerProvider";
import { NavBar } from "./components/nav/NavBar";

export const ThornsAndRoses = () => (
  <CustomerProvider>
    <Routes>
      <Route path="/*" element={< IsAuthenticated />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </CustomerProvider>
);

const IsAuthenticated = () => {
  if (localStorage.getItem('thorns_roses_customer')) {
    return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}