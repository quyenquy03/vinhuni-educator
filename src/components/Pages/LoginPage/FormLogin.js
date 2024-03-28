'use client'
import { Button, Checkbox, Form, Input, Space, Spin, message } from 'antd';
import classNames from 'classnames/bind';
import style from './login.module.scss'
import { usePathname, useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '@/redux/actions/accountAction';
import http from '@/libs/http';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style)
function FormLogin() {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('normal');
    const onFinish = async (value) => {
        setIsLoading(true);
        try {
            const api = loginType == 'normal' ? 'auth/login' : 'auth/login-sso';
            const res = await http.post(api, value, {
                credentials: 'include',
                mode: 'cors',
            });
            if(res.statusCode == 200) {
                const resFromNext = await http.post('/api/auth', res, {
                    baseUrl: ''
                });
                if(resFromNext.status == 200) {
                    message.success('Đăng nhập thành công');
                    dispatch(setAccessToken(res.data.accessToken));
                    
                    const getUser = await getCurrentUser(res.data.accessToken);
                    if(getUser.statusCode == 200 && getUser.data) {
                        dispatch(setCurrentUser(getUser.data));
                    }

                    router.push(ROUTES.ADMIN_DASHBOARD);
                } else {
                    message.error('Đăng nhập thất bại, vui lòng kiểm tra lại!')
                }
            }
            if(res.statusCode == 404) {
                message.error('Thông tin tài khoản hoặc mật khẩu không chính xác!');
            }
        } catch(error) {
            message.error('Hệ thống đang bị lỗi, vui lòng thử lại sau');
        }
        setIsLoading(false);
    };
    useEffect(() => {
        pathname == ROUTES.LOGIN_PAGE ? setLoginType('normal') : setLoginType('sso');
    }, [pathname])
    return (
        <div className={cx('body')}>
            <div className={cx('form-login')}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="userName"
                        rules={[
                            () => ({
                                validator(_, value) {
                                    if (value) {
                                        if(value.trim() != '' && !value.includes(' ')) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject(new Error('Tên tài khoản không hợp lệ'));
                                        }
                                    }
                                    return Promise.reject(new Error('Tên tài khoản không được để trống'));
                                }
                            }),
                        ]}
                        className={cx('form-input')}
                    >
                        <Space style={{width: '100%', display:'block'}}>
                                <Input className={cx('input')} />
                                <span className={cx('label')}>Tên tài khoản</span>
                        </Space>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Mật khẩu không được để trống',
                            },
                        ]}
                        className={cx('form-input')}
                    >
                        <Space style={{width: '100%', display:'block'}}>
                                <Input.Password  className={cx('input')} />
                                <span className={cx('label')}>Mật khẩu</span>
                        </Space>
                    </Form.Item>
                    <div className={cx('form-action')}>
                        <span>
                            <Checkbox>Nhớ tài khoản</Checkbox>
                        </span>
                        <span className={cx('forget-pass')}>Quên mật khẩu</span>
                    </div>
                    <Form.Item
                        className={cx('form-submit')}
                    >
                        <Button loading={isLoading} className={cx('btn-login')} htmlType='submit' size='large' role='button'>Đăng nhập</Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
    )
}
export default FormLogin;