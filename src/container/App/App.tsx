import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import About from 'pages/About/About'
import Products from 'pages/Products/Products'
import Payment from 'pages/Payment/Payment'
import Login from 'pages/Login/Login'
import ProductsPage from 'pages/ProductPage/ProductsPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import { useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { fetchProducts } from 'redux/productsReducer'

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />

                <Header />
                <Container
                    sx={{
                        padding: '80px 0',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<CartPage />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route path="/payment" element={<Payment />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route
                            path="/products/:id"
                            element={<ProductsPage />}
                        ></Route>
                        <Route
                            path="/favorites"
                            element={<FavoritesPage />}
                        ></Route>
                        <Route
                            path="/checkout"
                            element={<CheckoutPage />}
                        ></Route>
                    </Routes>
                </Container>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
