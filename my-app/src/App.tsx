import { Route, Routes } from "react-router-dom";
import {MainPage} from "./pages/Main";
import {ProductInfo} from "./pages/ProductInfo";
import { useProducts } from "./hooks/products";
import { ProductProps } from "./components/Product";


function App() {
  const {loading, error, products} = useProducts()
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/product/:id" element={ <ProductInfo product={ products } />} /> */}
    </Routes>
  );
}

export default App;
