import CartProductsList from "components/CartProductsList/CartProductsList";
import CartTotal from "components/CartTotal/CartTotal";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartHeader = ({ productsInCart }: Props) => {
  return (
    <>
      <div>
        <CartProductsList productsInCart={productsInCart} />
        <CartTotal productsInCart={productsInCart} />
      </div>
    </>
  );
};
export default CartHeader;
