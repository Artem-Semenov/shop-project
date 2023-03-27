import { Button, Card, CardContent, Grid } from '@mui/material'
import Title from 'components/Title/Title'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavoritesPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const favoriteProducts = useAppSelector((state) => state.productsLike)
    console.log(favoriteProducts)

    const filteredObject = Object.fromEntries(
        Object.entries(favoriteProducts).filter((el) => el[1] === true)
    )

    console.log(filteredObject)

    const dispatch = useAppDispatch()

    return (
        <>
            <Title>Favorite products</Title>
            <Grid container spacing={4}>
                {Object.keys(filteredObject).map((el) => (
                    <Grid item xs={12} sm={4} key={el}>
                        <Card variant="outlined">
                            <CardContent>
                                <Button
                                    variant="outlined"
                                    onClick={() => dispatch(toggleLike(el))}
                                >
                                    <FavoriteIcon />
                                </Button>
                                <div className="product-image">
                                    <img
                                        src={productsObject[parseInt(el)].image}
                                        alt={productsObject[parseInt(el)].name}
                                    />
                                </div>
                                <div className="product-title">
                                    {productsObject[parseInt(el)].name}
                                </div>
                                <div className="product-desc">
                                    {productsObject[parseInt(el)].desc}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default FavoritesPage
