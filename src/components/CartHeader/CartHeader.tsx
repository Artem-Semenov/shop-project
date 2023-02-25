type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((el, i) => ( 
        <div key={i}>{el} : {productsInCart[+el]}</div>
      ))}
    </div>
  );
};
export default CartHeader;
