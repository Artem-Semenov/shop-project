import { Button, TextField } from "@mui/material";
type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
  minCount: number;
  count: number;
};

const Quantity = ({ onIncrement, onDecrement, count, minCount }: Props) => {
  return <div className="product-quantity">
      <Button
        variant="outlined"
        onClick={() => onDecrement()}
        disabled={ count <= minCount} >
        -
      </Button>
      <TextField size="small" value={count}></TextField>
      <Button
        variant="outlined"
        onClick={() => onIncrement()}
        disabled={count >= 100}>
        +
      </Button>
    </div>
  
};
export default Quantity;
