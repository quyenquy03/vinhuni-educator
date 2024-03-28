'use client'
import { getCurrentUser } from "@/actions";
import { setAccessToken, setCurrentUser } from "@/redux/actions/accountAction";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AccountProvider = ({accessToken, children}) => {
    const dispatch = useDispatch();
    useState(() => {
        dispatch(setAccessToken(accessToken));
    })
    useLayoutEffect(() => {
        const fetchData = async() => {
            if(accessToken) {
                const res = await getCurrentUser(accessToken);
                if(res.statusCode == 200 && res.data) {
                    dispatch(setCurrentUser(res.data));
                }
            }
        }
        fetchData();
    }, [accessToken])
    return (
        <>{children}</>
    )
}
export default AccountProvider;