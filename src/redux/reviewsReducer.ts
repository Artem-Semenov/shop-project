import { createSlice } from '@reduxjs/toolkit'

interface Review {
    name: string
    text: string
}
type InitialState = Review[]

const initialState: InitialState = [
    {
        name: 'Masha',
        text: 'Отличный смартфон, отличная цена!!! Продавцу отдельное спасибо, за то что посоветовал такой телефон! Менеджер хорошо проконсультировал и помог подобрать по моим потребностям!',
    },
    {
        name: 'Marta',
        text: 'Подобається 14 про мах своїм розміром. Переживала що буде дуже великий, але дарма, навпаки очі менше втомлюються, люблю на ньому дивитись відео. Довго тримає заряд, рекомендую купувати не пожалієте',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) =>  [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
