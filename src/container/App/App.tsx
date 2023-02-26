import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";


type ProductsInCartType = {
  [id: number]: number;
};



const App = () => {
 
  const [productsInCart, setProductsinCart] = useState<ProductsInCartType>({
  });

  const onAddToCartClick = (id: number, count: number) => {

    setProductsinCart((prev) => {
      const newCartData = { ...prev };
      if (newCartData[id]) {
        newCartData[id] += count;
      } else {
        newCartData[id] = count;
      }
      return newCartData
    });
  };
  
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header productsInCart={productsInCart} />
        <Main onAddToCartClick={onAddToCartClick} />
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
