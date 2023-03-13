import { AnyAction, createSlice } from '@reduxjs/toolkit'

type ProductsLike = {
    [id: number]: boolean
}

export const initialState: ProductsLike = {

}

/* export const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {},
})


export default likeSlice.reducer */

const likeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'TOGGLE_LIKE': {
            return {
                ...state,
                [action.id]: !state[action.id],
            }
        }
        default:
            return state
    }
}

export default likeReducer
