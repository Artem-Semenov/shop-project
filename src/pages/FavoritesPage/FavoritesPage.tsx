import { Button, Card, CardContent, Grid } from '@mui/material'
import Title from 'components/Title/Title'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { getProductsObject, Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'

type ProductsObject = {
    [id: number]: Product
}

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavoritesPage = ({}: Props) => {

    const products = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(products)

    const favoriteProducts = useAppSelector((state) => state.productsLike)
    
    const filteredObject = Object.fromEntries(
        Object.entries(favoriteProducts).filter((el) => el[1] === true)
    )

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true)

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
                                        alt={productsObject[parseInt(el)].title}
                                    />
                                </div>
                                <div className="product-title">
                                    {productsObject[parseInt(el)].title}
                                </div>
                                <div className="product-desc">
                                    {productsObject[parseInt(el)].description}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup__body">
                        <Title> Hello Popup</Title>
                        <Button
                            variant="outlined"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
export default FavoritesPage
