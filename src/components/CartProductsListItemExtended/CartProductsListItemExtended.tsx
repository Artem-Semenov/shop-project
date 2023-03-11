import {CardContent, Card, Grid, Button} from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from "components/Quantity/Quantity";
import { useState } from "react";

type Props = {
  product: Product
  productCount: number
  onRemoveProductFromCart: (id: number) => void
  onChangeProductCountInCart: (id: number, count: number) => void
};
const CartProductsListItemExtended = ({product, productCount, onChangeProductCountInCart, onRemoveProductFromCart}: Props) => {

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
          <Quantity onIncrement={() => onChangeProductCountInCart(product.id, productCount + 1)} 
          onDecrement={() => onChangeProductCountInCart(product.id, productCount - 1 )}
           count={productCount} 
           minCount = {0}/>
           
          <br/>
          <Button variant="outlined" onClick={() => onRemoveProductFromCart(product.id)}>
            <DeleteIcon/>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductsListItemExtended;
