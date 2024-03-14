
import classNames from 'classnames/bind'
import style from './account.module.scss'
import image from '@/assets/images'

const cx = classNames.bind(style)
function LoginPageLayout({children}) {
    return (
        <div className={cx('wrapper')} style={{backgroundImage:`url(/login-background.jpg)`}}>
            <div className={cx('background')}>
                {children}
            </div>
        </div>
    )
}
export default LoginPageLayout