import {CardContent, Card, Grid } from "@mui/material";
import { Product } from "utils/productsArray";

type Props = {
  product: Product
  productCount: number
};
const CartProductsListItemExtended = ({product, productCount}: Props) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
          <div className="product-image">
            <img src={product.image}
             alt="" />
          </div>
          <div>{product.name}</div>
          <p>Price for one item: {product.price}</p>
          <p>Count: {productCount}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductsListItemExtended;
