'use client'
import { setAccessToken } from "@/redux/actions/accountAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AccountProvider = ({accessToken, children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAccessToken(accessToken));
    },[accessToken])
    return (
        <>{children}</>
    )
}
export default AccountProvider;