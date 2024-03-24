
'use client'
import { useState } from 'react';
import style from './HeaderComponent.module.scss'
import classNames from 'classnames/bind';
import { Popover } from 'antd';
import { BiSolidBellRing } from "react-icons/bi";
import NotificationItem from './NotificationItem';
const cx = classNames.bind(style)

function NotificationComponent() {
    const [open, setOpen] = useState(false);

    const hide = () => {
      setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const content = (
        <div className={cx('popover-content')}>
            <div className={cx('list')}>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </div>
            <span className={cx('readmore')}>Xem thêm</span>
        </div>
    )
    const title = (
        <div className={cx('popover-title')}>Thông báo</div>
    )

    return (
        <Popover
            content={content}
            title={title}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <span className={cx('icon', 'ml-2')}><BiSolidBellRing /></span>
        </Popover>
    )
}
export default NotificationComponent;