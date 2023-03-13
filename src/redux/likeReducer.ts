import { createSlice } from '@reduxjs/toolkit'

type ProductsLike = {
  [id: number] : boolean
}

export const initialState: ProductsLike = {
}

export const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {},
})


export default likeSlice.reducer