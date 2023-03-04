import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Container } from "@mui/material";
import Home from "pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CartPage from "pages/CartPage/CartPage";
import About from "pages/About/About";
import Products from "pages/Products/Products";
import Payment from "pages/Payment/Payment";
import Login from "pages/Login/Login";
import { omit } from "lodash";

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

  const onRemoveProductFromCart = (id: number) => {
    setProductsinCart((prev) => {
      const newCartData = { ...prev };
      if (newCartData[id]) {
        newCartData[id] -= 1;
      } 
      if (newCartData[id] < 1) {
      return omit(prev, id)
      }
      return newCartData;
    });
  }

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
            <Route path="/cart" element={<CartPage productsInCart={productsInCart} onRemoveProductFromCart={onRemoveProductFromCart} />} ></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </Container>
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
