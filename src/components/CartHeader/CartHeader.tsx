import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: { [id: number]: Product };
};

const CartHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <>
      <div>
        {Object.keys(productsInCart).map((el, i) => (
          <div key={i}>
            {productsObject[parseInt(el)].name} : {productsInCart[parseInt(el)]}
          </div>
        ))}
        <div>
        Total: $
        {Object.keys(productsInCart).reduce((acc, el) => {
          return (
            acc +
            productsObject[parseInt(el)].price * productsInCart[parseInt(el)]
          );
        }, 0)}
      </div>
      </div>
      
    </>
  );
};
export default CartHeader;
