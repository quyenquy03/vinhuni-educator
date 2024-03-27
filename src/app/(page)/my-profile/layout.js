import classNames from 'classnames/bind'
import style from './profile.module.scss'
import { Col, Row } from 'antd';
import CardBlock from '@/components/CardBlock';
import { ProfileLeftbox } from '@/components/Pages/ProfilePage';
const cx = classNames.bind(style);
const MyProfileLayout = ({children}) => {
    return (
        <div className="container">
            <div style={{padding: '30px 10px'}}>
                <CardBlock >
                    <div className={cx('profile-wrapper')}>
                        <Row className={cx('row')} gutter={[10, 10]}>
                            <Col sm={24} md={7}>
                                <div className={cx('left-box')}>
                                    <ProfileLeftbox />
                                </div>
                            </Col>
                            <Col sm={24} md={17}>
                                <div className={cx('right-box')}>
                                    {children}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </CardBlock>
            </div>
        </div>
    )
}
export default MyProfileLayout