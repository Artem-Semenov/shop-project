import { createSlice } from "@reduxjs/toolkit";

type ProductsCart = {
  [id: number]: number
}

export const initialState: ProductsCart = {
3:5,
2:5
}

export const cartSlice = createSlice({
  name: "productsCart",
  initialState: initialState,
  reducers: {
    cartReducer: () => ({
      ...initialState
    })
  }
})

export const {cartReducer} = cartSlice.actions
export default cartSlice.reducer