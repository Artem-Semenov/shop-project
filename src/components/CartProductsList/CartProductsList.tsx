import CartProductsListItem from "components/CartProductsListItem/CartProductsListItem";
import { myContext } from "container/App/App";
import { useContext } from "react";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsObject?: { [id: number]: Product };
  CartItem?: any;
};


const CartProductsList = ({
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductsListItem,
}: Props) => {
  const context = useContext(myContext)

  return (
    <>
      {context?.productsInCart ? Object.keys(context?.productsInCart).map((el, i) => (
        <CartItem
        key={i}
        product={productsObject[parseInt(el)]} 
        productCount={context?.productsInCart[parseInt(el)]}
        />
        
      )) : ''}
    </>
  );
};
export default CartProductsList;
