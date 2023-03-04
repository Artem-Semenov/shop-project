import { Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartTotal from "components/CartTotal/CartTotal";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartPage = ({
  productsInCart
}: Props) => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <CartProductsList productsInCart={productsInCart} />
      <CartTotal productsInCart={productsInCart} />
    </>
  );
};
export default CartPage;
