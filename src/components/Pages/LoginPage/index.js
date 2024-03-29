import Image from 'next/image';
import { Button, Checkbox, Input } from 'antd';
import classNames from 'classnames/bind';
import style from './login.module.scss'
import FormLogin from './FormLogin';
const cx = classNames.bind(style)
function LoginPageComponent () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Chào mừng bạn đến với <span className={cx('highlight-title')}>Vinhuni Educator</span></span>
                <Image
                    alt="Logo"
                    src="/logo.png"
                    className={cx('logo')}
                    radius="full"
                    width={70}
                    height={70}
                />
                <span className={cx('header-title')}>Đăng nhập hệ thống</span>
            </div>
            <FormLogin />
            <div className={cx('other-login')}>
                <div className={cx('other-login-title')}>
                    Hoặc đăng nhập với
                </div>
                <div className={cx('other-login-list')}>
                    <div className={cx('other-login-item')}>
                        <Image
                            alt="csv"
                            src="/csv.png"
                            className={cx('other-login-logo')}
                            radius="full"
                            width={40}
                            height={40}
                        />
                        <span className={cx('other-login-name')}>Đăng nhập với cổng sinh viên</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPageComponent;