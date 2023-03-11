import { myContext } from "container/App/App";
import { useContext } from "react";
import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsObject?: { [id: number]: Product };
};
const CartTotal = ({
  productsObject = getProductsObject(productsArray),
}: Props) => {
  const context = useContext(myContext)
  return (
    <div>
          Total: $
          {context?.productsInCart ? Object.keys(context?.productsInCart).reduce((acc, el) => {
            return (
              acc +
              productsObject[parseInt(el)].price * context?.productsInCart[parseInt(el)]
            );
          }, 0) : ''}
        </div>
  )
}
export default CartTotal