import { Route, Routes } from "react-router";
import { NurseryList } from "./components/nursery/NurseryList";
import { NurseryProvider } from "./components/nursery/NurseryProvider";
import { Home } from "./Home";

export const ApplicationViews = () => (
  <NurseryProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nurseries" element={<NurseryList />} />
      <Route path="/distributors" element={<div>distributors</div>} />
      <Route path="/retailers" element={<div>retailers</div>} />
    </Routes>
  </NurseryProvider>
)