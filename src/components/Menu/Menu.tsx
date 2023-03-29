import MenuItem from "./MenuItem";
import InputLabel from '@mui/material/InputLabel';
import {default as MenuItemMUI} from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { changeCurrency } from "redux/currencyReducer";
type Props = {};


const Menu = (props: Props) => {

  const currency = useAppSelector(state => state.currency)
  const dispatch = useAppDispatch()
  const handleCurrencyChange = (event: SelectChangeEvent) => {
    dispatch(changeCurrency(event.target.value))
  }
  return (
    <>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/products">Products</MenuItem>
    <MenuItem to="/payment">Payment</MenuItem>
    <MenuItem to="/login">Login</MenuItem>
    <MenuItem to="/favorites">Favorites</MenuItem>
    <MenuItem to="/cart">Cart</MenuItem>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small" sx={{color: '#fff', '&.Mui-focused' : {color: '#fff'}}}>currency</InputLabel>
      <Select
        sx={{color: '#260e4c', '&:after': {borderBottom: 'none'}}}
        labelId="demo-select-small"
        id="demo-select-small"
        value={currency.currency}
        label="currency"
        onChange={handleCurrencyChange}
      >
        <MenuItemMUI value='UAH'>UAH</MenuItemMUI>
        <MenuItemMUI value='USD'>USD</MenuItemMUI>
        <MenuItemMUI value='EUR'>EUR</MenuItemMUI>
        <MenuItemMUI value='PLN'>PLN</MenuItemMUI>
      </Select>
    </FormControl>
    </>
  );
};
export default Menu;
