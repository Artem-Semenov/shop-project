import { useAppSelector } from 'redux/hooks'
import { getProductsObject, Product } from 'utils/productsArray'

type ProductsObject = {
    [id: number]: Product
}

type Props = {
    productsObject?: { [id: number]: Product }
    productsInCart: { [id: number]: number }
}

const CartTotal = ({ productsInCart }: Props) => {
    const products = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(products)

    return (
        <div>
            Total: $
            {productsInCart
                ? Object.keys(productsInCart).reduce((acc, el) => {
                      return (
                          acc +
                          productsObject[parseInt(el)].price *
                          productsInCart[parseInt(el)]
                      )
                  }, 0)
                : ''}
        </div>
    )
}
export default CartTotal
