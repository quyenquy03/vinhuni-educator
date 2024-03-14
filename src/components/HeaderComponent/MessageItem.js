// 'use client'
import style from './HeaderComponent.module.scss'
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
const cx = classNames.bind(style)
function MessageItem() {
    return (
        <div className={cx('item','unread')}>
            <div className={cx('item-image')}>
                <img className={cx('image')} src='https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg' alt="avt" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('item-header', 'd-flex', 'justify-content-between', 'align-items-center')}>
                    <span className={cx('text-highlight')}>Nguyễn Tạ Quyền</span> 
                    <span className={cx('time')}>5 giờ trước</span>
                </div>
                <div><span>Em chào cô, cho em xin tài liệu với </span></div>
            </div>
            {/* <span className={cx('unread-icon')}></span> */}
            <span className={cx('clear')}><FontAwesomeIcon icon={faXmarkCircle} /></span>
        </div>
    )
}
export default MessageItem;