import { USER_LOGGED, USER_UNLOGGED } from "../types";

const initialState = {
    logged: false,
    id: 0,
    username: '',
    role: '',
}

export const userReducer = (state = initialState, action) => {
    if (action.type === USER_LOGGED) return {
        ...state,
        logged: true,
        id: action.payload.id,
        username: action.payload.username,
        role: action.payload.role,
    }

    if (action.type === USER_UNLOGGED) return {
        ...state,
        logged: false,
        id: 0,
        username: '',
        role: '',
    }
    return state;
}
