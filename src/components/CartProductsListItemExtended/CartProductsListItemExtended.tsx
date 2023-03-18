import { CardContent, Card, Grid, Button } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useContext } from 'react'
import { myContext } from 'container/App/App'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    product: Product
    productCount: number
}
const CartProductsListItemExtended = ({ product, productCount}: Props) => {
    const context = useContext(myContext)

    const isLiked = useAppSelector((state) => state.productsLike[product.id])

    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(toggleLike(product.id))}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        onIncrement={() =>
                            context?.onChangeProductCountInCart(
                                product.id,
                                productCount + 1
                            )
                        }
                        onDecrement={() =>
                            context?.onChangeProductCountInCart(
                                product.id,
                                productCount - 1
                            )
                        }
                        count={productCount}
                        minCount={0}
                    />

                    <br />
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_PRODUCT_FROM_CART',
                                id: product.id,
                            })
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended
