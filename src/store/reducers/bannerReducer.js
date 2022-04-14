import { OPEN_BANNER } from "../types";

const initialState = {
    open: false,
    message: '',
};

export const bannerReducer = (state = initialState, action) => {
    if (action.type === OPEN_BANNER) {
        return {
            ...state,
            open: true,
            text: action.payload,
        }
    }

    return state;
}