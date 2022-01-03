import { applyMiddleware, combineReducers, createStore } from "redux";
import themeReducer from "./themeReducer"
import thunk from "redux-thunk"
import weatherReducer from "./weatherReducer"


const persistedState = localStorage.getItem('reduxState')
                        ? JSON.parse(localStorage.getItem('reduxState')) : {}

let reducers = combineReducers(
    {
        themeReducer,
        weatherReducer, 
    });

let store = createStore(reducers, persistedState, applyMiddleware(thunk));

export default store;