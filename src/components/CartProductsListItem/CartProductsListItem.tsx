import { Product } from "utils/productsArray";

type Props = {
  productCount: number;
  product: Product;
};
const CartProductsListItem = ({ product, productCount }: Props) => {
  console.log(product)
  return (
    <div>
      {product.name} : {productCount}
    </div>
  );
};
export default CartProductsListItem;
