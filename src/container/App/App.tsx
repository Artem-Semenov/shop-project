import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useState, createContext } from 'react'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import About from 'pages/About/About'
import Products from 'pages/Products/Products'
import Payment from 'pages/Payment/Payment'
import Login from 'pages/Login/Login'
import { omit } from 'lodash'

type Context = {
    productsLike: {
        [id: number]: boolean
    }
    productsInCart: {
        [id: number]: number
    }
    onRemoveProductFromCart: (id: number) => void
    onAddToCartClick: (id: number, count: number) => void
    onChangeProductCountInCart: (id: number, count: number) => void
    onSetLikedProduct: (id: number) => void
}

export const myContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductsinCart] = useState<
        Context['productsInCart']
    >({})

    const onAddToCartClick = (id: number, count: number) => {
        setProductsinCart((prev) => {
            const newCartData = { ...prev }
            if (newCartData[id]) {
                newCartData[id] += count
            } else {
                newCartData[id] = count
            }
            return newCartData
        })
    }

    const onRemoveProductFromCart = (id: number) => {
        setProductsinCart((prev) => omit(prev, id))
    }

    const onChangeProductCountInCart = (id: number, count: number) => {
        setProductsinCart((prev) => {
            const newCartData = { ...prev }
            if (newCartData[id]) {
                newCartData[id] = count
            }
            if (newCartData[id] < 1) {
                return omit(prev, id)
            }
            return newCartData
        })
    }

    const [productsLike, setProductsLike] = useState<Context['productsLike']>(
        {}
    )

    const onSetLikedProduct = (id: number) => {
        setProductsLike((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <myContext.Provider
                    value={{
                        productsLike,
                        productsInCart,
                        onRemoveProductFromCart,
                        onAddToCartClick,
                        onChangeProductCountInCart,
                        onSetLikedProduct,
                    }}
                >
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
                            <Route
                                path="/products"
                                element={<Products />}
                            ></Route>
                            <Route
                                path="/payment"
                                element={<Payment />}
                            ></Route>
                            <Route path="/login" element={<Login />}></Route>
                        </Routes>
                    </Container>
                    <Footer />
                </myContext.Provider>
            </StyledEngineProvider>
        </>
    )
}
export default App
