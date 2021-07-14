import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLoggedReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    counter: counterReducer,
    loggedIn: isLoggedReducer
});

export default rootReducers