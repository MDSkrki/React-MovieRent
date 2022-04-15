import { USER_LOGGED } from "../types";

const initialState = {
    logged: false,
    userId: 0,
}

export const userReducer = (state = initialState, action) => {
    if (action.type === USER_LOGGED) {
        return {
            ...state,
            logged: true,
            userId: action.payload,
        }
    }
    return state;
}
