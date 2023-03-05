import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";
import Quantity from "Quantity/Quantity";

type Props = {
  name: string;
  type: string;
  capacity: number;
  desc: string;
  price: number;
  image: string;
  onAddToCartClick: Function;
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
  onAddToCartClick,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  const onIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

 

  return (
    <Card className="product">
      <CardContent>
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-title">{name}</div>
        <div className="product-desc">{desc}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity: {capacity}gb</div>
        <div className="product-price">Price: {price}$</div>
        
         <Quantity onIncrement={onIncrement} 
         onDecrement={onDecrement} count={count}
         minCount = {1}/>
        
      </CardContent>
      <CardActions>
        <div className="btns-wrap">
          <Button variant="contained" onClick={() => onAddToCartClick(id, count)}>
            Add to cart
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
