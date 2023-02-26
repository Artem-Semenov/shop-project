import productsArray, { getProductsObject } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((el, i) => (
        <div key={i}>
          {getProductsObject(productsArray)[parseInt(el)].name} : {productsInCart[parseInt(el)]}
        </div>
      ))}
    </div>
  );
};
export default CartHeader;
