import { Grid, Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartProductsListItemExtended from "components/CartProductsListItemExtended/CartProductsListItemExtended";
import CartTotal from "components/CartTotal/CartTotal";
import { useAppSelector } from "redux/hooks";



const CartPage = () => {
  const productsInCart = useAppSelector(state => state.productsInCart)
  return (
    <>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <Grid container spacing={4} sx={{marginTop: 0}}>
        <CartProductsList
        productsInCart = {productsInCart}
          CartItem={CartProductsListItemExtended}
        />
      </Grid>
      <CartTotal productsInCart = {productsInCart}/>
    </>
  );
};
export default CartPage;
