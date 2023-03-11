import CartProductsList from "components/CartProductsList/CartProductsList";
import CartTotal from "components/CartTotal/CartTotal";
import { myContext } from "container/App/App";
import { useContext } from "react";



const CartHeader = () => {
  return (
    <>
      <div>
        <CartProductsList />
        <CartTotal/>
      </div>
    </>
  );
};
export default CartHeader;
