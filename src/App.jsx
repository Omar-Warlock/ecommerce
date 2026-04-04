import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/Home/Home";
import ProductContext from "./ProductContext";

function App() {
  return (
    <>
      <ProductContext>
        <header>
          <TopHeader />
          <BtmHeader />
        </header>
        <Home />
      </ProductContext>
    </>
  );
}

export default App;
