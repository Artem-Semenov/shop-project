import { Grid } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExtended from 'components/CartProductsListItemExtended/CartProductsListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import Title from 'components/Title/Title'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <Title>Cart</Title>
            <Grid container spacing={4} sx={{ marginTop: 0 }}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                />
            </Grid>
            <br />
            <CartTotal productsInCart={productsInCart} />
            <br />
            <Link to="/checkout">Proceed to checkout</Link>
        </>
    )
}
export default CartPage
