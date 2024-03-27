
'use client'
import { useLayoutEffect, useState } from 'react';
import style from './HeaderComponent.module.scss'
import classNames from 'classnames/bind';
import { Popover, Skeleton, message, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGear, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@/actions/accountActions';
import { setAccessToken, setCurrentUser } from '@/redux/actions/accountAction';
import { useRouter } from 'next/navigation';
import { logoutBEServer, logoutNextServer } from '@/apiService';
import Image from 'next/image';
const cx = classNames.bind(style)

function UserAccount() {

    const {accessToken} = useSelector(state => state.accountReducer);
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState({
        fullName : <Skeleton.Input style={{height: '14px'}} active={true} size={'small'} block={true} />,
        avatar: '/user.png',
        userName: <Skeleton.Input style={{height: '11px'}} active={true} size={'small'} block={true} />,
        roles: ['Quản trị viên']
    });
    useLayoutEffect(() => {
        const fetchData = async() => {
            if(accessToken) {
                const res = await getCurrentUser(accessToken);
                if(res.statusCode == 200 && res.data) {
                    setCurrentAccount({
                        fullName: `${res.data?.firstName} ${res.data?.lastName}`,
                        avatar: res.data?.avatar ?? '/user.png',
                        userName: res.data?.userName,
                        roles: res.data?.roles
                    })
                    dispatch(setCurrentUser(res.data));
                }
            }
        }
        fetchData();
    }, [accessToken])

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const handleLogout = async() => {
        try {
            const res = await logoutBEServer(accessToken)
            if(res.statusCode == 200 || res.statusCode == 401) {
                const resFromNextServer = await logoutNextServer();
                if(resFromNextServer.status == 200) {
                    message.success('Đã đăng xuất!');
                    dispatch(setAccessToken(''));
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

    const content = (
        <div className={cx('popover-content')}>
            <ul className={cx('account-menu')}>
                <Link href={ROUTES.MY_PROFILE} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span className={cx('menu-name')}>Trang cá nhân</span>
                </Link>
                <Link href={ROUTES.ADMIN_DASHBOARD} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLayerGroup} /></span>
                    <span className={cx('menu-name')}>Trang quản trị</span>
                </Link>
                <Link href={ROUTES.ADMIN_DASHBOARD} className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faGear} /></span>
                    <span className={cx('menu-name')}>Cài đặt tài khoản</span>
                </Link>
                <li onClick={handleLogout} className={cx('menu-item')}>
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
                <Image
                    alt="Logo"
                    src={currentAccount?.avatar}
                    className={cx('account-avatar')}
                    radius="full"
                    width={40}
                    height={40}
                />
                <div>
                    <span className={cx('account-name')}>{currentAccount?.fullName}</span>
                    <span className={cx('account-username')}>{currentAccount?.userName}</span>
                </div>
            </div>
        </Popover>
    )
}
export default UserAccount;