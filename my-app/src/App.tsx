import { Route, Routes } from "react-router-dom";
import {MainPage} from "./pages/Main";
import {ProductInfo} from "./pages/ProductInfo";
import { AddedInCart } from "./pages/AddedInCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react_store" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<AddedInCart />} />
      </Routes>
    </>
  );
}

export default App;
