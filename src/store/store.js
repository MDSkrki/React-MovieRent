import { createStore } from "redux";
import reducers from './reducers/index';
import {devToolsEnhancer} from 'redux-devtools-extension'
 
export default createStore(reducers, devToolsEnhancer());