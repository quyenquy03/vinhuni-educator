'use client'
import allReducer from "@/redux/reducers"
import { Provider } from "react-redux"
import { createStore } from "redux"
const store = createStore(allReducer)

const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default ReduxProvider