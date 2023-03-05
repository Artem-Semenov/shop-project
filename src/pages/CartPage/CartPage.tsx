import { Grid, Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartProductsListItemExtended from "components/CartProductsListItemExtended/CartProductsListItemExtended";
import CartTotal from "components/CartTotal/CartTotal";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
  onChangeProductCountInCart: (id: number, count: number) => void
  onRemoveProductFromCart: (id: number) => void
};

const CartPage = ({ productsInCart, onChangeProductCountInCart, onRemoveProductFromCart }: Props) => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <Grid container spacing={4} sx={{marginTop: 0}}>
        <CartProductsList
          productsInCart={productsInCart}
          CartItem={CartProductsListItemExtended}
          onChangeProductCountInCart = {onChangeProductCountInCart}
          onRemoveProductFromCart ={onRemoveProductFromCart}
        />
      </Grid>
      <CartTotal productsInCart={productsInCart} />
    </>
  );
};
export default CartPage;
