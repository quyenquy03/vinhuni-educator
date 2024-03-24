import Image from 'next/image';
import classNames from 'classnames/bind';
import style from './login.module.scss'
import FormLogin from './FormLogin';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
const cx = classNames.bind(style)
function LoginSSOComponent () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Chào mừng bạn đến với <span className={cx('highlight-title')}>Vinhuni Educator</span></span>
                <Image
                    alt="Logo"
                    src="/csv.png"
                    className={cx('logo')}
                    radius="full"
                    width={70}
                    height={70}
                />
                <span className={cx('header-title')}>Đăng nhập với cổng sinh viên</span>
            </div>
            <FormLogin />
            <div className={cx('other-login')}>
                <div className={cx('other-login-title')}>
                    Hoặc đăng nhập với
                </div>
                <Link href={ROUTES.LOGIN_PAGE} className={cx('other-login-list')}>
                    <div className={cx('other-login-item')}>
                        <Image
                            alt="csv"
                            src="/logo.png"
                            className={cx('other-login-logo')}
                            radius="full"
                            width={40}
                            height={40}
                        />
                        <span className={cx('other-login-name')}>Đăng nhập bằng tài khoản hệ thống</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default LoginSSOComponent;