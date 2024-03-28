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
const getCurrentUser = async (accessToken) => {
    try {
        const res = await http.get('/account/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            next: {tags : ['fetch-current-user']}
        })
        return res;
    } catch(error) {
        return {
            status: 500,
            message: 'Error from server'
        }
    }
}
const updateProfile = async (data) => {
    try {
        const res = await http.put('/account/update-profile', data, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return res;
    } catch(error) {
        return {
            status: 500,
            message: 'Error from server'
        }
    }
}
const updateAvatar = async (data) => {
    try {
        const res = await http.put('/account/change-avatar', {
            imageURL : data
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return res;
    } catch(error) {
        return {
            status: 500,
            message: 'Error from server'
        }
    }
}

export {
    logoutAccount,
    getCurrentUser,
    updateAvatar,
    updateProfile
}