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
  id: number;
};
const ProcutsList = (props: Props) => {
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
          ({ name, type, capacity, desc, price, id }: Product) => {
            return (
              <Grid item xs={12} md={4} key={id}>
                <ProductListItem
                  name={name}
                  type={type}
                  desc={desc}
                  price={price}
                  capacity={capacity}
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
