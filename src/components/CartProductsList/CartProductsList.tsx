import CartProductsListItem from "components/CartProductsListItem/CartProductsListItem";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
  CartItem?: any;
};
const CartProductsList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductsListItem,
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((el, i) => (
        <CartItem
        key={i}
        product={productsObject[parseInt(el)]} 
        productCount={productsInCart[parseInt(el)]}/>

      ))}
    </>
  );
};
export default CartProductsList;
