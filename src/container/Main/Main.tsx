import { Container } from "@mui/material"
import Home from "pages/Home/Home"

type Props = {onAddToCartClick : Function}
const Main = ({onAddToCartClick}: Props) => {
  return (
    <Container sx={{
      padding: '80px 0',
      }}>
      <Home onAddToCartClick={onAddToCartClick}/>
    </Container>
    
  )
}
export default Main