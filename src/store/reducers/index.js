import { combineReducers } from "redux";
import { bannerReducer } from "./bannerReducer";
import { userReducer } from "./userReducer";

const reducers = {
    banner: bannerReducer,
    user: userReducer,
}

export default combineReducers(reducers);