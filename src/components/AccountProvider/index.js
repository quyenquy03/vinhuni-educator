'use client'
import { setAccessToken } from "@/redux/actions/accountAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AccountProvider = ({accessToken, children}) => {
    const dispatch = useDispatch();
    useState(() => {
        dispatch(setAccessToken(accessToken));
    })
    return (
        <>{children}</>
    )
}
export default AccountProvider;