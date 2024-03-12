import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const allReducer = combineReducers({
    counterReducer,
})
export default allReducer;