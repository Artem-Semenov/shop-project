import { Typography } from "@mui/material";
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
      <div>
        {Object.keys(productsInCart).map((el, i) => (
          <div key={i}>
            {productsObject[parseInt(el)].name} : {productsInCart[parseInt(el)]}
          </div>
        ))}
        <CartTotal productsInCart={productsInCart}/>
      </div>
    </>
  );
};
export default CartPage;
