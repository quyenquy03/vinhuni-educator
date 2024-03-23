'use client'
import { Checkbox, Form, Input, Space, message } from 'antd';

import classNames from 'classnames/bind';
import style from './login.module.scss'
// <<<<<<< HEAD
// <<<<<<< Updated upstream
// =======
// import { useRouter } from 'next/navigation';
// import ROUTES from '@/constants/routes';
// >>>>>>> manage-general
// const cx = classNames.bind(style)

// function FormLogin() {
//     const router = useRouter();
//     const onFinish = async (values) => {
// <<<<<<< HEAD
//         console.log('Success:', values);
// =======
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { loginAccount } from '@/actions/accountActions';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '@/redux/actions/accountAction';
const cx = classNames.bind(style)

function FormLogin() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = async (value) => {

        const res = await fetch('https://api.techschool.id.vn/api/auth/login', {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                "Content-Type" : "application/json",
            }
        }).then( res => res.json())

        if(res.statusCode == 200) {
            const resFromNext = await fetch('/api/auth', {
                method: 'POST',
                body: JSON.stringify(res),
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(async res => {
                const payload = await res.json();
                const data = {
                    status: res.status,
                    payload
                }
                return data;
            });
            if(resFromNext.status == 200) {
                messageApi.open({
                    type: 'success',
                    content: 'Đăng nhập thành công!',
                });
                dispatch(setAccessToken(res.data.accessToken));
                router.push(ROUTES.ADMIN_DASHBOARD);
            } else {
                messageApi.open({
                    type: 'success',
                    content: 'Đăng nhập thất bại, vui lòng kiểm tra lại!',
                });
            }
        }
        if(res.statusCode == 404) {
            messageApi.open({
                type: 'error',
                content: 'Thông tin tài khoản hoặc mật khẩu không chính xác!',
            });
        }
    };
    const onFinishFailed = async (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={cx('body')}>
            {contextHolder}
            <div className={cx('form-login')}>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                            // {
                            //     min: 6,
                            //     message: 'Mật khẩu tối thiểu 6 kí tự'
                            // }
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
                        <button  className={cx('btn-login')} size='large' role='button'>Đăng nhập</button>
                    </Form.Item>
                </Form>
                </div>
            </div>
    )
}
export default FormLogin;