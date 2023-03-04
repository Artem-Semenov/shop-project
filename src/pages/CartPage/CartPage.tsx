import { Grid, Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartProductsListItemExtended from "components/CartProductsListItemExtended/CartProductsListItemExtended";
import CartTotal from "components/CartTotal/CartTotal";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartPage = ({ productsInCart }: Props) => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <Grid container spacing={4}>
        <CartProductsList
          productsInCart={productsInCart}
          CartItem={CartProductsListItemExtended}
        />
      </Grid>
      <CartTotal productsInCart={productsInCart} />
    </>
  );
};
export default CartPage;
