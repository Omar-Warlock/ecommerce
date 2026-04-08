import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/Home/Home";
import ProductContext from "./ProductContext";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <ProductContext>
        <header>
          <TopHeader />
          <BtmHeader />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </ProductContext>
    </>
  );
}

export default App;
