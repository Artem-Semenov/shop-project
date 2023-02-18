import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import "./ProductListItem.scss";
import { Component } from "react";

type Props = {
  name: string;
  type: string;
  capacity: number;
  desc: string;
  price: number;
  image: string;
};

type State = {
  count: number;
  color: string;
  show: boolean;
};

class ProductListItem extends Component<Props, State> {
  state = {
    count: 1,
    color: "green",
    show: true,
  };

  onIncrementClick = (num: number) => {
    this.setState((prevState) => ({
      count: prevState.count + num,
    }));
  };
  onDecrementClick = (num: number) => {
    this.setState((prevState) => ({
      count: prevState.count - num,
    }));
  };

  onChangeColorClick = () => {
    this.setState((prevState) => ({
      color:
        prevState.color === "green"
          ? "red"
          : prevState.color === "red"
          ? "purple"
          : prevState.color === "purple"
          ? "aqua"
          : "green",
    }));
  };

  onShoAccordionBtnClick = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { name, type, capacity, desc, price, image } = this.props;
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
          <div>
            <span style={{ color: this.state.color }}>
              {" "}
              Color: {this.state.color}
            </span>
          </div>
          <button onClick={() => this.onChangeColorClick()}>
            Change color
          </button>
          <button
            onClick={() => this.onShoAccordionBtnClick()}
            style={{ display: "block", marginTop: "10px" }}
          >
            Show full description
          </button>
          {
            this.state.show ? <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            praesentium ducimus in nesciunt omnis iste facere voluptas deserunt
            ipsum. Blanditiis perspiciatis a ipsum nostrum officiis obcaecati
            impedit accusamus, expedita praesentium.
          </p> : null
          }
          

          <div className="product-price">Price: {price}$</div>
          <div className="product-quantity">
            <Button
              variant="outlined"
              onClick={() => this.onDecrementClick(1)}
              disabled={this.state.count <= 1}
            >
              -
            </Button>
            <TextField size="small" value={this.state.count}></TextField>
            <Button variant="outlined" onClick={() => this.onIncrementClick(1)}>
              +
            </Button>
          </div>
        </CardContent>
        <CardActions>
          <div className="btns-wrap">
            <Button variant="contained">Add to cart</Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

/* 
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
        <div className="product-quantity">
          <Button variant="outlined">-</Button>
          <TextField size="small" value='1'></TextField>
          <Button variant="outlined">+</Button>
        </div>
      </CardContent>
      <CardActions>
        <div className="btns-wrap">
          <Button variant="outlined">Add to cart</Button>
        </div>
      </CardActions>
    </Card>
  );
}; */
export default ProductListItem;
