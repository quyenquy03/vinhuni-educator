'use client'

import { logoutBEServer, logoutNextServer } from "@/apiService";
import ROUTES from "@/constants/routes";
import { setAccessToken } from "@/redux/actions/accountAction";
import { notification, message } from "antd";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const GetNewToken = ({accessToken}) => {
    const [token, setToken] = useState(accessToken);
    const dispatch = useDispatch();
    const router = useRouter();
    const [api, contextHolder] = notification.useNotification();

    const handleGetNewToken = async () => {
        var dem = 0;
        try {
            do {
                const res = await fetch('https://api.techschool.id.vn/api/auth/refresh-token', {
                    credentials: 'include',
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json",
                    }
                })
                .then(res => res.json())
                .catch(dem++);

                if(res.statusCode == 200 && res.data.accessToken) {
                    await fetch('/api/auth', {
                        method: 'POST',
                        body: JSON.stringify(res),
                        headers: {
                            "Content-Type" : "application/json"
                        }
                    })
                    dispatch(setAccessToken(res.data.accessToken));
                    setToken(res.data.accessToken);
                    console.log('success')
                    break;
                }
            } while(dem >0 && dem < 5)
            if(dem == 5) {
                handleLogout();
            }
            console.log('get new token');
        } catch(e) {
            api.error({
                message: 'Đăng xuất thất bại',
                description:
                  'Hệ thống đang lỗi, vui lòng thử lại sau!',
              });
        }
    }

    const handleLogout = async () => {
        try {
            const res = await logoutBEServer(token)
            if(res.statusCode == 200 || res.statusCode == 401) {
                const resFromNextServer = await logoutNextServer();
                if(resFromNextServer.status == 200) {
                    message.success('Đã đăng xuất!');
                    router.push(ROUTES.LOGIN_PAGE);
                }
            }
        } catch(error) {
            api.error({
                message: 'Đăng xuất thất bại',
                description:
                  'Hệ thống đang lỗi, vui lòng thử lại sau!',
              });
        }
    }
    
    useEffect(() => {
        let interval = null;
        if(token) {
            const jwt = jwtDecode(token)
            var tokenExpried =  jwt.exp;
            interval = setInterval(() => {
                const currentTime = Math.floor(Date.now() / 1000);
                if(tokenExpried - currentTime < 100) {
                    handleGetNewToken();
                    tokenExpried += 300;
                }
            }, 50*1000);
        } else {
            handleGetNewToken();
        }
        () => {
            clearInterval(interval);
        }
    },[token])

    return null;
}
export default GetNewToken;