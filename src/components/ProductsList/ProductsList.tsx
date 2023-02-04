import { Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";

type Props = {};
const iphoneProps = {name: 'Iphone 14 Pro', desc: 'prefect phone', price: 1440, capacity: 256, type: 'phone'}
const SamsungProps = {name: 'Samsung 14 Pro', desc: 'another phone another phone', price: 599, capacity: 256, type: 'phone'}
const NokiaProps = {name: 'Samsung 14 Pro', desc: 'also phone another phone another phone another phone', price: 200, capacity: 256, type: 'phone'}

const ProcutsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="div" align="center">
        List of products
      </Typography>
      <Grid container spacing={4} >
        <Grid item xs={12} md={4}>
          <ProductListItem  {...iphoneProps}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductListItem {...SamsungProps}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductListItem {...NokiaProps}/>
        </Grid>
      </Grid>
    </>
  );
};
export default ProcutsList;
