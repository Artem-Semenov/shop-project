import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useState} from 'react';




type CartDataProps ={
  totalCount: number
  totalPrice: number
}
const App = () => {

  const [cartData, setCartData] = useState<CartDataProps>({
    totalCount: 0,
    totalPrice: 0
  })

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header cartData = {cartData}/>
        <Main setCartData = {setCartData}/>
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
