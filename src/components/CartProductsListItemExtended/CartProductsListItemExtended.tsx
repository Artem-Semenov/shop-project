import {CardContent, Card, Grid, Button} from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from "Quantity/Quantity";
import { useState } from "react";

type Props = {
  product: Product
  productCount: number
  onRemoveProductFromCart: (id: number, count: number) => void
};
const CartProductsListItemExtended = ({product, productCount, onRemoveProductFromCart}: Props) => {
  
  const [count, setCount] = useState<number>(1);

  const onIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
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
          <Quantity onIncrement={onIncrement} onDecrement={onDecrement} count={count}/>
          <br/>
          <Button variant="outlined" onClick={() => onRemoveProductFromCart(product.id, count)}>
            <DeleteIcon/>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductsListItemExtended;
