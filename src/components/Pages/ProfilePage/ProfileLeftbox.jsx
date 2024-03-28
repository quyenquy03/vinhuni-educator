'use client'
import classNames from 'classnames/bind';
import style from './profilePage.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidCog, BiSolidUserDetail, BiSolidLock } from "react-icons/bi";

import ROUTES from '@/constants/routes';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
const cx = classNames.bind(style);

const ProfileLeftbox = () => {
    const {currentUser} = useSelector(state => state.accountReducer);
    const pathname = usePathname();
    const listMenu = [
        {
            name: 'Thông tin tài khoản',
            icon: <BiSolidUserDetail/>,
            link: ROUTES.MY_PROFILE
        },
        {
            name: 'Đổi mật khẩu',
            icon: <BiSolidLock/>,
            link: ROUTES.CHANGE_PASSWORD
        },
        {
            name: 'Cài đặt tài khoản',
            icon: <BiSolidCog/>,
            link: ROUTES.SETUP
        },
    ]

    return (
        <div className={cx('leftbox-wrapper')}>
            <div className={cx('leftbox-infomation')}>
                {
                    currentUser?.id ? 
                    <>
                        <div className={cx('leftbox-avatar')}>
                            <Image
                                alt="Logo"
                                src={currentUser.avatar ?? "/user.png"}
                                className={cx('avatar')}
                                width={100}
                                height={100}
                            />
                            <Image
                                alt="camera"
                                src="/camera.png"
                                className={cx('camera-icon')}
                                width={30}
                                height={30}
                            />
                        </div>
                        <h4 className={cx('leftbox-name')}>{`${currentUser.firstName} ${currentUser.lastName}`}</h4>
                        <span className={cx('leftbox-username')}>{currentUser?.userName}</span>
                    </> : 
                    <div className={cx('skeleton-box')}>
                        <Skeleton.Avatar style={{height: '100px', width: '100px' }} active></Skeleton.Avatar>
                        <Skeleton.Input block style={{height: '20px', margin: '12px 0'}} />
                        <Skeleton.Input block style={{height: '14px'}} />
                    </div>
                }
            </div>
            
            <div className={cx('leftbox-menubar')}>
                {
                    listMenu.map((item, index) => {
                        return (
                            <Link key={index} className={cx('menu-item', {active : item.link === pathname})} href={item.link}>
                                <span className={cx('menu-icon')}>{item.icon} </span>
                                <span className={cx('menu-name')}>{item.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProfileLeftbox;