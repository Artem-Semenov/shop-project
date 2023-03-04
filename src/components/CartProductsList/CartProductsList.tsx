import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
};
const CartProductsList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((el, i) => (
        <div key={i}>
          {productsObject[parseInt(el)].name} : {productsInCart[parseInt(el)]}
        </div>
      ))}
    </>
  );
};
export default CartProductsList;
