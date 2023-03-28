import {
    Button,
    Card,
    CardActions,
    CardContent,
} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import {addProductToCart} from 'redux/cartReducer'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    type: string
    capacity: number
    description: string
    price: number
    image: string
    id: number
}

const ProductListItem = ({
    title,
    type,
    capacity,
    description,
    price,
    id,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }


    const isLiked = useAppSelector((state) => state.productsLike[id])

    const dispatch = useAppDispatch()

    return (
        <Card className="product">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>  dispatch(toggleLike(id))
                        }   
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>
                <div className="product-title"><Link to={`/products/${id}`}>{title}</Link></div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}gb</div>
                <div className="product-price">Price: {price}$</div>
                <Quantity
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    count={count}
                    minCount={1}
                />
            </CardContent>
            <CardActions>
                <div className="btns-wrap">
                    <Button
                        variant="contained"
                        onClick={() => dispatch(addProductToCart({id, count}))
                    }
                    >
                        Add to cart
                    </Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
