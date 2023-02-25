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

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header productsInCart={productsInCart} />
        <Main setCartData={setProductsinCart} />
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
