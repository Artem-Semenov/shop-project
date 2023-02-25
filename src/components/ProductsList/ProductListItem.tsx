import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";

type Props = {
  name: string;
  type: string;
  capacity: number;
  desc: string;
  price: number;
  image: string;
  setCartData: Function;
  id: number
};

const ProductListItem = ({
  name,
  type,
  capacity,
  desc,
  price,
  id,
  image,
  setCartData,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  const onIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const onAddToCartClick = () => {
    setCartData((prev: { [id: number]: number }) => {
      const newCartData = { ...prev };
      if (newCartData[id]) {
        newCartData[id] += count;
      } else {
        newCartData[id] = count;
      }
      return newCartData
    });
  };

  return (
    <Card className="product">
      <CardContent>
        <div className="product-image">
          <img src={image} alt="" />
        </div>
        <div className="product-title">{name}</div>
        <div className="product-desc">{desc}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity: {capacity}gb</div>
        <div className="product-price">Price: {price}$</div>
        <div className="product-quantity">
          <Button
            variant="outlined"
            onClick={() => onDecrement()}
            disabled={count <= 1}
          >
            -
          </Button>
          <TextField size="small" value={count}></TextField>
          <Button
            variant="outlined"
            onClick={() => onIncrement()}
            disabled={count >= 10}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardActions>
        <div className="btns-wrap">
          <Button variant="contained" onClick={() => onAddToCartClick()}>
            Add to cart
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
