import { Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";

type Props = {};
const ProcutsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="div" align="center">
        List of products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ProductListItem />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductListItem />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductListItem />
        </Grid>
      </Grid>
    </>
  );
};
export default ProcutsList;
