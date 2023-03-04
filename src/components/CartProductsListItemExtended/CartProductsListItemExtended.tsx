import {CardContent, Card, Grid, Button} from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  product: Product
  productCount: number
  onRemoveProductFromCart: Function
};
const CartProductsListItemExtended = ({product, productCount, onRemoveProductFromCart}: Props) => {

  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
          <div className="product-image">
            <img src={product.image}
             alt={product.name} />
          </div>
          <div>{product.name}</div>
          <p>Price for one item: {product.price}</p>
          <p>Count: {productCount}</p>
          <Button variant="outlined" onClick={() => onRemoveProductFromCart(product.id)}>
            <DeleteIcon/>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductsListItemExtended;
