import { Route, Routes } from "react-router";
import { DistributorList } from "./components/distributor/DistributorList";
import { DistributorProvider } from "./components/distributor/DistributorProvider";
import { FlowerProvider } from "./components/flower/FlowerProvider";
import { NurseryList } from "./components/nursery/NurseryList";
import { NurseryProvider } from "./components/nursery/NurseryProvider";
import { NurseryDistributorProvider } from "./components/nurserydistributor/NurseryDistributorProvider";
import { NurseryFlowerProvider } from "./components/nurseryflower/NurseryFlowerProvider";
import { RetailerList } from "./components/retailer/RetailerList";
import { RetailerProvider } from "./components/retailer/RetailerProvider";
import { ShoppingCart } from "./components/shoppingcart/ShoppingCart";
import { ShoppingCartProvider } from "./components/shoppingcart/ShoppingCartProvider";
import { Home } from "./Home";

export const ApplicationViews = () => (
  <ShoppingCartProvider>
    <NurseryProvider>
      <DistributorProvider>
        <FlowerProvider>
          <NurseryDistributorProvider>
            <NurseryFlowerProvider>
              <RetailerProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nurseries" element={<NurseryList />} />
                  <Route path="/distributors" element={<DistributorList />} />
                  <Route path="/retailers" element={<RetailerList />} />
                  <Route path="/shoppingcart" element={<ShoppingCart />} />
                </Routes>
              </RetailerProvider>
            </NurseryFlowerProvider>
          </NurseryDistributorProvider>
        </FlowerProvider>
      </DistributorProvider>
    </NurseryProvider>
  </ShoppingCartProvider>
  
)