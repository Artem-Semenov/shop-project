import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type ProductsObject = {
    [id: number]: Product
}

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}
const ProductsPage = ({
}: Props) => {
    const { id } = useParams()

    const products = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(products)

    const product = productsObject[parseInt(id!)]
    
    return (
        <>
            <Typography variant="h4" component="h1">
                {product.title}
            </Typography>
            <p
                dangerouslySetInnerHTML={{
                    __html: product.description!,
                }}
            ></p>
        </>
    )
}
export default ProductsPage
