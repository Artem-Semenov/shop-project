import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addReview } from 'redux/reviewsReducer'
import './Reviews.scss'
type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewReview((prev) => ({
            ...prev,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prev) => ({
            ...prev,
            text: e.target.value,
        }))
    }

    const dispatch = useAppDispatch()

    const onSendReviewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('all fields are required')
        } else {
            dispatch(addReview(newReview))
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    const reviews = useAppSelector((state) => state.reviews)

    return (
        <>
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    margin: '40px 0',
                }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => {
                return (
                    <div className="review" key={i}>
                        <Typography
                            component="h3"
                            variant="h6"
                            sx={{
                                margin: '20px 0',
                            }}
                        >
                            {name}:
                        </Typography>
                        <p>{text}</p>
                    </div>
                )
            })}
            <form>
                <h3>Please leave review</h3>
                <div>
                    <TextField
                        required
                        label={'name'}
                        value={newReview.name}
                        onChange={(e) => handleName(e)}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder={'Your message'}
                        value={newReview.text}
                        onChange={(e) => handleText(e)}
                    />
                </div>
                <Button
                    type={'submit'}
                    variant={'outlined'}
                    onClick={(e) => onSendReviewClick(e)}
                >
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
