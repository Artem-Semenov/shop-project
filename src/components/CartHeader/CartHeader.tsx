import productsArray, { getProductsObject, Product } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: 
  {[id: number] : Product}
};

const CartHeader = ({ productsInCart, 
  productsObject = getProductsObject(productsArray) }: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((el, i) => (
        <div key={i}>
          {productsObject[parseInt(el)].name} : {productsInCart[parseInt(el)]}
        </div>
      ))}
    </div>
  );
};
export default CartHeader;
