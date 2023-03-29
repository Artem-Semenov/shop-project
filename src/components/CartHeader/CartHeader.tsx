import CartProductsList from "components/CartProductsList/CartProductsList";
import CartTotal from "components/CartTotal/CartTotal";
import { useAppSelector } from "redux/hooks";

const CartHeader = () => {
  const productsInCart = useAppSelector(state => state.productsInCart)

  return (
    <>
      <div>
        <CartProductsList productsInCart ={productsInCart} />
        <CartTotal productsInCart ={productsInCart}/>
      </div>
    </>
  );
};
export default CartHeader;
