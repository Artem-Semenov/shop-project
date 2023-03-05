import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './Reviews.scss'
type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Христина',
            text: 'Покупкою задоволена на всі 100!!!! Гарний дизайн, приємний колір, легкий, зручно поміщається в жіночій руці.',
        },
        {
            name: 'Тарас',
            text: 'Швидка доставка.Телефон Працює бездогано 10/10',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
 
    const onSendReviewClick = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setReviews((arrReviews) => [...arrReviews, newReview])
      setNewReview({
        name: '',
        text: '',
    })
  }


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
            <form onSubmit={(e) => onSendReviewClick(e)}>
                <h3>Please leave review</h3>
                <div>
                    <TextField
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
                <Button type={'submit'} variant={'outlined'}
                >
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
