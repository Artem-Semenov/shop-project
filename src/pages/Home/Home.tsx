import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {onAddToCartClick:Function}
const Home = ({onAddToCartClick}: Props) => {
  return (
   <>
   <ProductsList onAddToCartClick={onAddToCartClick}/>
   <Reviews/>
   </>
    
  )
}
export default Home