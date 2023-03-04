import ProductsList from 'components/ProductsList/ProductsList'

type Props = {onAddToCartClick:Function}
const Home = ({onAddToCartClick}: Props) => {
  return (
   <>
   <ProductsList onAddToCartClick={onAddToCartClick}/>
   </>
    
  )
}
export default Home