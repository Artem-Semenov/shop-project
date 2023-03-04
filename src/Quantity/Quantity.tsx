import { Button, TextField } from "@mui/material";
type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
  count: number;
};

const Quantity = ({ onIncrement, onDecrement, count }: Props) => {
  return <div className="product-quantity">
      <Button
        variant="outlined"
        onClick={() => onDecrement()}
        disabled={count <= 1}>
        -
      </Button>
      <TextField size="small" value={count}></TextField>
      <Button
        variant="outlined"
        onClick={() => onIncrement()}
        disabled={count >= 10}>
        +
      </Button>
    </div>
  
};
export default Quantity;
