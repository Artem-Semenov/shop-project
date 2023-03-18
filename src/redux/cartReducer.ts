/* import { createSlice } from "@reduxjs/toolkit";

type ProductsCart = {
  [id: number]: number
}

export const initialState: ProductsCart = {}

export const cartSlice = createSlice({
  name: "productsCart",
  initialState: initialState,
  reducers: {
    cartReducer: (id) => ({
      ...initialState,
      [id]:
    })
  }
})

export const {cartReducer} = cartSlice.actions
export default cartSlice.reducer */

import { AnyAction } from '@reduxjs/toolkit'

type ProductsCart = {
    [id: number]: number
}
export const initialState: ProductsCart = {}

const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            return {
                ...state,
                [action.id]: state[action.id] || 0 + action.count,
            }
        }
        default:
            return state
    }
}

export default cartReducer
