import { SAVE_POPULAR } from "../types";


const initialState = {
    popular: [],
}

export const movieReducer = (state = initialState, action) => {
    if (action.type === SAVE_POPULAR) return {
        ...state,
        popular: action.payload,
    }

    return state;
}