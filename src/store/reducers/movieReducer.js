import { SAVE_POPULAR, SAVE_SELECTED_MOVIE } from "../types";


const initialState = {
    popular: [],
    movie: {},
    rented: [], 
}

export const movieReducer = (state = initialState, action) => {
    if (action.type === SAVE_POPULAR) return {
        ...state,
        popular: action.payload,
    }

    if (action.type === SAVE_SELECTED_MOVIE) return {
        ...state,
        movie: action.payload
    }

    return state;
}