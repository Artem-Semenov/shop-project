import CartProductsListItem from "components/CartProductsListItem/CartProductsListItem";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
  CartItem?: any;
  onChangeProductCountInCart?: (id: number, count: number) => void
};
const CartProductsList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductsListItem,
  onChangeProductCountInCart
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((el, i) => (
        <CartItem
        key={i}
        product={productsObject[parseInt(el)]} 
        productCount={productsInCart[parseInt(el)]}
        onChangeProductCountInCart = {onChangeProductCountInCart}
        />
        
      ))}
    </>
  );
};
export default CartProductsList;
