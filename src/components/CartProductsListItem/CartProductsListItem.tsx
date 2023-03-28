import { Product } from 'utils/productsArray'

type Props = {
    productCount: number
    product: Product
}
const CartProductsListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title} : {productCount}
        </div>
    )
}
export default CartProductsListItem
