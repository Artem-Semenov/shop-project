import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
};
const CartTotal = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
          Total: $
          {Object.keys(productsInCart).reduce((acc, el) => {
            return (
              acc +
              productsObject[parseInt(el)].price * productsInCart[parseInt(el)]
            );
          }, 0)}
        </div>
  )
}
export default CartTotal