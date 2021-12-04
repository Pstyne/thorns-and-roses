import { Route, Routes } from "react-router";
import { DistributorProvider } from "./components/distributor/DistributorProvider";
import { FlowerProvider } from "./components/flower/FlowerProvider";
import { NurseryList } from "./components/nursery/NurseryList";
import { NurseryProvider } from "./components/nursery/NurseryProvider";
import { NurseryDistributorProvider } from "./components/nurserydistributor/NurseryDistributorProvider";
import { NurseryFlowerProvider } from "./components/nurseryflower/NurseryFlowerProvider";
import { Home } from "./Home";

export const ApplicationViews = () => (
  <NurseryProvider>
    <DistributorProvider>
      <FlowerProvider>
        <NurseryDistributorProvider>
          <NurseryFlowerProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nurseries" element={<NurseryList />} />
              <Route path="/distributors" element={<div>distributors</div>} />
              <Route path="/retailers" element={<div>retailers</div>} />
            </Routes>
          </NurseryFlowerProvider>
        </NurseryDistributorProvider>
      </FlowerProvider>
    </DistributorProvider>
  </NurseryProvider>
)