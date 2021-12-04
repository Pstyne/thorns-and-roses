import { Route, Routes } from "react-router";

export const ApplicationViews = () => (
  <Routes>
    <Route path="/" element={<div>home</div>} />
    <Route path="/nurseries" element={<div>nurseries</div>} />
    <Route path="/distributors" element={<div>distributors</div>} />
    <Route path="/retailers" element={<div>retailers</div>} />
  </Routes>
)