import { combineReducers } from "redux";
import { bannerReducer } from "./bannerReducer";

const reducers = {
    banner: bannerReducer,
}

export default combineReducers(reducers);