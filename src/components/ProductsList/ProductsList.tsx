import { Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";
import productsArray from "utils/productsArray";

type Props = {setCartData: Function};

const ProcutsList = ({setCartData}: Props) => {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        align="center"
        sx={{ marginBottom: "38px" }}
      >
        List of products
      </Typography>

      <Grid container spacing={4}>
        {productsArray.map(
          ({ name, type, capacity, desc, price, id, image }) => {
            return (
              <Grid item xs={12} md={4} key={id}>
                <ProductListItem
                  image={image}
                  name={name}
                  type={type}
                  desc={desc}
                  price={price}
                  capacity={capacity}
                  setCartData = {setCartData}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </>
  );
};
export default ProcutsList;
