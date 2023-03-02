import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Container } from "@mui/material";
import Home from "pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CartPage from "pages/CartPage/CartPage";

type ProductsInCartType = {
  [id: number]: number;
};

const App = () => {
  const [productsInCart, setProductsinCart] = useState<ProductsInCartType>({});

  const onAddToCartClick = (id: number, count: number) => {
    setProductsinCart((prev) => {
      const newCartData = { ...prev };
      if (newCartData[id]) {
        newCartData[id] += count;
      } else {
        newCartData[id] = count;
      }
      return newCartData;
    });
  };

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header productsInCart={productsInCart} />
        <Container
          sx={{
            padding: "80px 0",
          }}>
          <Routes>
            <Route
              path="/"
              element={<Home onAddToCartClick={onAddToCartClick} />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Container>
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
