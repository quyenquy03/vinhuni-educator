import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import accountReducer from "./accountReducer";

const allReducer = combineReducers({
    counterReducer,
    accountReducer
})

export default allReducer;