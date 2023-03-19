import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsObject?: { [id: number]: Product };
  productsInCart: {[id: number] : number}
};
const CartTotal = ({
  productsObject = getProductsObject(productsArray),
  productsInCart
}: Props) => {

  return (
    <div>
          Total: $
          {productsInCart ? Object.keys(productsInCart).reduce((acc, el) => {
            return (
              acc +
              productsObject[parseInt(el)].price * productsInCart[parseInt(el)]
            );
          }, 0) : ''}
        </div>
  )
}
export default CartTotal