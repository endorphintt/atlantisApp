import { combineReducers, legacy_createStore as createStore } from "redux";
import menuReducer from './menuReducer'
import offersReducer from "./offersReducer";
import blogReducer from './blogReducer'


let reducers = combineReducers({
    menuPage: menuReducer,
    offersPage: offersReducer,
    blogPage: blogReducer, 
});

let store = createStore(reducers);

export default store;