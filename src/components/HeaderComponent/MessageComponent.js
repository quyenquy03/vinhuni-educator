
'use client'
import { useState } from 'react';
import style from './HeaderComponent.module.scss'
import classNames from 'classnames/bind';
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import MessageItem from './MessageItem';
const cx = classNames.bind(style)

function MessageComponent() {
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
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
            </div>
            <span className={cx('readmore')}>Xem thêm</span>
        </div>
    )
    const title = (
        <div className={cx('popover-title')}>Tin nhắn</div>
    )

    return (
        <Popover
            content={content}
            title={title}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <span className={cx('icon', 'ml-2')}><FontAwesomeIcon icon={faComment} /></span>
        </Popover>
    )
}
export default MessageComponent;