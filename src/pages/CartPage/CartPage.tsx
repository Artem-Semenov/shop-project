import { Typography } from "@mui/material";
import CartProductsList from "components/CartProductsList/CartProductsList";
import CartTotal from "components/CartTotal/CartTotal";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
};

const CartPage = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
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
