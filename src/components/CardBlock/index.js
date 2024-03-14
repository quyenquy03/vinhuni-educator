import classNames from 'classnames/bind';
import style from './style.module.scss'
const cx = classNames.bind(style)

function CardBlock({className, header, style, children}) {
    return (
        <div className={cx('card-wrapper', {
            [className] : className
        })} style={style}>
            <div className={cx('card-header')}>
                {header}
            </div>
            {children}
        </div>
    )
}
export default CardBlock;