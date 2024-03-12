
'use client'
import { useState } from 'react';
import style from './HeaderComponent.module.scss'
import classNames from 'classnames/bind';
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faGear, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style)

function UserAccount() {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const content = (
        <div className={cx('popover-content')}>
            <ul className={cx('account-menu')}>
                <li className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span className={cx('menu-name')}>Thông tin tài khoản</span>
                </li>
                <li className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faLayerGroup} /></span>
                    <span className={cx('menu-name')}>Thông tin tài khoản</span>
                </li>
                <li className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faGear} /></span>
                    <span className={cx('menu-name')}>Thông tin tài khoản</span>
                </li>
                <li className={cx('menu-item')}>
                    <span className={cx('menu-icon')}><FontAwesomeIcon icon={faCircleQuestion} /></span>
                    <span className={cx('menu-name')}>Thông tin tài khoản</span>
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
            <div className={cx('account-box')}>
                <span className={cx('account-name')}>Nguyen Ta Quyen</span>
                <img className={cx('account-avatar')} src='https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg' alt="avt" />
            </div>
        </Popover>
    )
}
export default UserAccount;