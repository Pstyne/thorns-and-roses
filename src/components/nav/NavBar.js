import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Thorns and Roses</Link>
    </li>
    <li>
      <Link to="/nurseries">Nurseries</Link>
    </li>
    <li>
      <Link to="/distributors">Distributors</Link>
    </li>
    <li>
      <Link to="/retailers">Retailers</Link>
    </li>
  </ul>
)