import { Button, Card, CardActions, CardContent } from "@mui/material";
import './ProductListItem.scss'
type Props = {};
const ProductListItem = (props: Props) => {
  return <Card className="product">
    <CardContent>
  <div className="product-title">Iphone 14 Pro</div>
  <div className="product-desc">Type: phone</div>
  <div className="product-features">Capacity: 256gb</div>
  <div className="product-price">Price: 1440$</div>
    </CardContent>
    <CardActions>
      <Button variant="outlined">Add to cart</Button>
    </CardActions>
  </Card>
}
export default ProductListItem