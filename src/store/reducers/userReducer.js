import { USER_LOGGED, USER_UNLOGGED } from "../types";

const initialState = {
    logged: false,
    userId: 0,
}

export const userReducer = (state = initialState, action) => {
    if (action.type === USER_LOGGED) return {
        ...state,
        logged: true,
        userId: action.payload,
    }

    if (action.type === USER_UNLOGGED) return {
        ...state,
        logged: false,
        userId: 0,
    }
    return state;
}
