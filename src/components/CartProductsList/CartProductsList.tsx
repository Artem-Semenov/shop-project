import CartProductsListItem from 'components/CartProductsListItem/CartProductsListItem'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsObject?: { [id: number]: Product }
    CartItem?: any
    productsInCart: {
        [id: number]: number
    }
}

const CartProductsList = ({
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductsListItem,
    productsInCart,
}: Props) => {
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
