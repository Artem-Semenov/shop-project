import { createSlice } from '@reduxjs/toolkit'

type Currency = {
    currency: 'UAH' | 'USD' | 'EUR' | 'PLN'
    coefficient: number
}

const initialState : Currency= {
    currency: 'USD',
    coefficient: 1,
}

export const currencySlice = createSlice({
    name: 'currencySlice',
    initialState: initialState,
    reducers: {
        changeCurrency: (state, action) => ({
            currency: action.payload,
            coefficient:
                action.payload === 'UAH'
                    ? 40
                    : action.payload === 'USD'
                    ? 1
                    : action.payload === 'EUR'
                    ? 0.97
                    : 4,
        }),
    },
})

export const {changeCurrency} = currencySlice.actions
export default currencySlice.reducer