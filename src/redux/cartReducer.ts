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

import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type ProductsCart = {
    [id: number]: number
}
export const initialState: ProductsCart = {}



export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState: initialState,
    reducers: {
         addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]: (state[action.payload.id] || 0) + action.payload.count,
        }),
        
        removeProductFromCart: (state, action) => omit(state, action.payload),
        
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count,
        })
    }
})

export const {addProductToCart, removeProductFromCart, changeProductQuantity} = cartSlice.actions
export default cartSlice.reducer
/* const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            {
                return {
                    ...state,
                    [action.id]: state[action.id] || 0 + action.count,
                }
            }
            break
        case 'REMOVE_PRODUCT_FROM_CART':
            return omit(state, action.id)
            break
        case 'CHANGE_PRODUCT_QUANTITY':
            return {
                ...state,
                [action.id]: action.count,
            }
            break
        default:
            return state
    }
}

export default cartReducer */
