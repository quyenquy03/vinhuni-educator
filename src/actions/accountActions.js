'use server'

import http from "@/libs/http";
import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get('accessToken');
const accessToken = token?.value;
const logoutAccount = async () => {
    const res = await http.post('/auth/logout', null, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res;
}
const getCurrentUser = async () => {
    const res = await http.get('/account/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res;
}

export {
    logoutAccount,
    getCurrentUser
}