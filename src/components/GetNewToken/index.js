'use client'

import { logoutBEServer, logoutNextServer } from "@/apiService";
import ROUTES from "@/constants/routes";
import { setAccessToken } from "@/redux/actions/accountAction";
import { Modal, notification, message } from "antd";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const GetNewToken = ({accessToken}) => {
    const [token, setToken] = useState(accessToken);
    const dispatch = useDispatch();
    const pathname = usePathname();
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
    
    const loopCheckToken = () => {
        const currentTime = Math.floor(Date.now() / 1000);
        if(tokenExpried - currentTime < 100) {
            handleGetNewToken();
        }
    }
    useEffect(() => {
        console.log(token)
        if(!token) {
            router.push(ROUTES.LOGIN_PAGE);
        }
        const jwt = jwtDecode(token)
        const tokenExpried = new Date(jwt.exp);
        console.log(tokenExpried)
        const interval = setInterval(() => {
            // const currentTime = Math.floor(Date.now() / 1000);
            // if(tokenExpried - currentTime < 100) {
            //     console.log('expried: ',tokenExpried)
            //     console.log('current: ',currentTime)
            //     console.log('expried - current: ',tokenExpried-currentTime)
            //     // handleGetNewToken();
            // }
        }, 50*1000);

        () => {
            clearInterval(interval);
        }
    },[token])

    const content = (
        <div>

        </div>
    )
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={handleGetNewToken}>Change token</button>
        </div>
    )
}
export default GetNewToken;