import { Container } from "@mui/material"
import Home from "pages/Home/Home"

type Props = {setCartData : Function}
const Main = ({setCartData}: Props) => {
  return (
    <Container sx={{
      padding: '80px 0',
      }}>
      <Home setCartData={setCartData}/>
    </Container>
    
  )
}
export default Main