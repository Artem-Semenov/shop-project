import ProductsList from 'components/ProductsList/ProductsList'

type Props = {setCartData:Function}
const Home = ({setCartData}: Props) => {
  return (
   <>
   <ProductsList setCartData={setCartData}/>
   </>
    
  )
}
export default Home