'use server'

import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get('accessToken');
const accessToken = token?.value;
const logoutAccount = async () => {
    const res = await fetch('https://api.techschool.id.vn/api/auth/logout', {
        // credentials: 'include',
        // mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return await res.json();
}
const getCurrentUser = async () => {
    const res = await fetch('https://api.techschool.id.vn/api/account/me', {
        credentials: 'include',
        mode: 'cors',
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return await res.json();
}

export {
    logoutAccount,
    getCurrentUser
}