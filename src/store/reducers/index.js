import { combineReducers } from "redux";
import { bannerReducer } from "./bannerReducer";
import { movieReducer } from "./movieReducer";
import { userReducer } from "./userReducer";

const reducers = {
    banner: bannerReducer,
    user: userReducer,
    movie: movieReducer,
}

export default combineReducers(reducers);