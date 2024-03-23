
'use client'
import { useEffect, useState } from 'react';
import style from './HeaderComponent.module.scss'
import classNames from 'classnames/bind';
import { Popover, message, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGear, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
<<<<<<< Updated upstream
=======
import ROUTES from '@/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@/actions/accountActions';
import { setCurrentUser } from '@/redux/actions/accountAction';
import { useRouter } from 'next/navigation';
import { logoutBEServer, logoutNextServer } from '@/apiService';
>>>>>>> Stashed changes
const cx = classNames.bind(style)

function UserAccount() {
    const {accessToken} = useSelector(state => state.accountReducer);
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch();
    const router = useRouter();
    const [currentAccount, setCurrentAccount] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            const res = await getCurrentUser();
            if(res.statusCode == 200 && res.data) {
                setCurrentAccount(res.data)
                dispatch(setCurrentUser(res.data));
            }
        }
        fetchData();
    }, [accessToken])

    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const handleLogout = async() => {
        setIsLoading(true);
        try {
            const res = await logoutBEServer(accessToken)

            if(res.statusCode == 200 || res.statusCode == 401) {
                const resFromNextServer = await logoutNextServer();
                setIsLoading(false)
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
        setIsLoading(false);
    }

    const content = (
        <div className={cx('popover-content')}>
            <ul className={cx('account-menu')}>
                <Link href={'/admin'} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span className={cx('menu-name')}>Trang cá nhân</span>
                </Link>
                <Link href={'/admin'} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLayerGroup} /></span>
                    <span className={cx('menu-name')}>Trang quản trị</span>
                </Link>
                <Link href={'/admin'} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faGear} /></span>
                    <span className={cx('menu-name')}>Cài đặt tài khoản</span>
                </Link>
<<<<<<< Updated upstream
                <Link href={'/account/logout'} className={cx('menu-item')}>
=======
                <li onClick={handleLogout} className={cx('menu-item')}>
>>>>>>> Stashed changes
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faCircleQuestion} /></span>
                    <span className={cx('menu-name')}>Đăng xuất</span>
                </li>
            </ul>
        </div>
    )

    return (
        <Popover
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            {contextHolder}
            <div className={cx('account-box')}>
                <span className={cx('account-name')}>Nguyen Ta Quyen</span>
                <img className={cx('account-avatar')} src='https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg' alt="avt" />
            </div>
        </Popover>
    )
}
export default UserAccount;