import CartProductsListItem from "components/CartProductsListItem/CartProductsListItem";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
  CartItem?: any;
  onRemoveProductFromCart?: (id: number, count: number) => void
};
const CartProductsList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductsListItem,
  onRemoveProductFromCart
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((el, i) => (
        <CartItem
        key={i}
        product={productsObject[parseInt(el)]} 
        productCount={productsInCart[parseInt(el)]}
        onRemoveProductFromCart = {onRemoveProductFromCart}/>
        
      ))}
    </>
  );
};
export default CartProductsList;
