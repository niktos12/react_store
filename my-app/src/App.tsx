import { Route, Routes , BrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/Main";
import {ProductInfo} from "./pages/ProductInfo";
import { AddedInCart } from "./pages/AddedInCart";



function App() {
  return (
    <Routes>
      <Route path="" element={<MainPage />}>
      </Route>
      <Route path="/product/:id" element={<ProductInfo />}>
      </Route>
      <Route path="/cart" element={<AddedInCart />}>
      </Route>
    </Routes>
  );
}

export default App;
