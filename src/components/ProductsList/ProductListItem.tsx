import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  name: string;
  type: string;
  capacity: number;
  desc: string,
  price: number;
};
const ProductListItem = (props: Props) => {
  return (
    <Card className="product">
      <CardContent>
        <div className="product-title">{props.name}</div>
        <div className="product-desc">{props.desc}</div>
        <div className="product-features">Type: {props.type}</div>
        <div className="product-features">Capacity: {props.capacity}gb</div>
        <div className="product-price">Price: {props.price}$</div>
      </CardContent>
      <CardActions>
        <div className="btns-wrap">
          <Button variant="outlined">Add to cart</Button>
        </div>
      </CardActions>
    </Card>
  );
};
export default ProductListItem;
