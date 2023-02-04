import { Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";
import productsArray from "utils/productsArray";
type Props = {};

type Product = {
  name: string;
  type: string;
  capacity: number;
  desc: string;
  price: number;
};
const ProcutsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="div" align="center">
        List of products
      </Typography>

      <Grid container spacing={4}>
        {productsArray.map((el: Product) => {
          return (
            <Grid item xs={12} md={4}>
              <ProductListItem {...el} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ProcutsList;
