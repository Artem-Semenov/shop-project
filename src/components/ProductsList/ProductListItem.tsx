import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  name: string;
  type: string;
  capacity: number;
  desc: string,
  price: number,
  image: string,
};
const ProductListItem = ({name, type, capacity, desc, price, image} : Props) => {
  return (
    <Card className="product">
      <CardContent>
        <div className="product-image">
          <img src={image} alt=""/>
        </div>
        <div className="product-title">{name}</div>
        <div className="product-desc">{desc}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity: {capacity}gb</div>
        <div className="product-price">Price: {price}$</div>
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
