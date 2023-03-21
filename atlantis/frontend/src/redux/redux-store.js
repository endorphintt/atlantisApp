import { combineReducers, legacy_createStore as createStore } from "redux";
import menuReducer from './menuReducer'


let reducers = combineReducers({
    menuPage: menuReducer,
});

let store = createStore(reducers);

export default store;