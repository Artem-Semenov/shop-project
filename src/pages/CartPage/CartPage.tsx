import { Grid, Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartProductsListItemExtended from "components/CartProductsListItemExtended/CartProductsListItemExtended";
import CartTotal from "components/CartTotal/CartTotal";


const CartPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <Grid container spacing={4} sx={{marginTop: 0}}>
        <CartProductsList
          CartItem={CartProductsListItemExtended}
        />
      </Grid>
      <CartTotal/>
    </>
  );
};
export default CartPage;
