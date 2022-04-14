import { CLOSE_BANNER, OPEN_BANNER } from "../types";

const initialState = {
    open: false,
    message: '',
};

export const bannerReducer = (state = initialState, action) => {
    if (action.type === OPEN_BANNER) {
        return {
            ...state,
            open: true,
            message: action.payload,
        }
    }

    if (action.type === CLOSE_BANNER) {
        return {
            ...state,
            open: false,
        }
    }

    return state;
}