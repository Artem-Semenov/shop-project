import CartProductsListItem from 'components/CartProductsListItem/CartProductsListItem'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, Product } from 'utils/productsArray'

type ProductsObject = {
    [id: number]: Product
}
type Props = {
    CartItem?: any
    productsInCart: {
        [id: number]: number
    }
}

const CartProductsList = ({
    CartItem = CartProductsListItem,
    productsInCart,
}: Props) => {
    const products = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(products)

    return (
        <>
            {productsInCart
                ? Object.keys(productsInCart).map((el, i) => (
                      <CartItem
                          key={i}
                          product={productsObject[parseInt(el)]}
                          productCount={productsInCart[parseInt(el)]}
                      />
                  ))
                : ''}
        </>
    )
}
export default CartProductsList
