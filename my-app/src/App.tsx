import { Route, Routes } from "react-router-dom";
import {MainPage} from "./pages/Main";
import {ProductInfo} from "./pages/ProductInfo";



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={ <ProductInfo  />} />
    </Routes>
  );
}

export default App;
