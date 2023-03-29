import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { useAppSelector } from 'redux/hooks'

const ProcutsList = () => {
    const products = useAppSelector((state) => state.products)

    return (
        <>
            <Typography
                variant="h3"
                component="div"
                align="center"
                sx={{ marginBottom: '38px' }}
            >
                List of products
            </Typography>

            <Grid container spacing={4}>
                {products.map(
                    ({
                        title: title,
                        type,
                        capacity,
                        description,
                        price,
                        id,
                        image,
                    }) => {
                      
                        return (
                            <Grid item xs={12} md={4} key={id}>
                                <ProductListItem
                                    id={id}
                                    image={image}
                                    title={title}
                                    type={type}
                                    description={description}
                                    price={price}
                                    capacity={capacity}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}
export default ProcutsList
