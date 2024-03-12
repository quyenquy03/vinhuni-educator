'use client'

import { down, up } from "@/redux/actions/counter";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    const {number} = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
            <div>{number}</div>
            <div>
                <button onClick={() => dispatch(down())}>DOWN</button>
                <button onClick={() => dispatch(up())}>UP</button>
            </div>
        </>
    )
}
export default HomePage;