import { Typography } from "@mui/material";
import logo from 'assets/Logo.svg'

type Props = {};

const Logo = (props: Props) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <img src={logo} alt="logo" />
  </Typography>
  )
}
export default Logo