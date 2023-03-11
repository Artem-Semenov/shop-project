import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    onAddToCartClick: Function
    productsLike: { [id: number]: boolean }
    onSetLikedProduct: (id: number) => void
}
const Home = ({ onAddToCartClick, productsLike, onSetLikedProduct }: Props) => {
    return (
        <>
            <ProductsList
                onAddToCartClick={onAddToCartClick}
                productsLike={productsLike}
                onSetLikedProduct={onSetLikedProduct}
            />
            <Reviews />
        </>
    )
}
export default Home
