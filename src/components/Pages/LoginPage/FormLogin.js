'use client'
import { Checkbox, Form, Input, Space } from 'antd';
import classNames from 'classnames/bind';
import style from './login.module.scss'
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
const cx = classNames.bind(style)

function FormLogin() {
    const router = useRouter();
    const onFinish = async (values) => {
        // console.log('Success:', values);
        // redirect('/admin/dashboard')
        router.push(ROUTES.ADMIN_DASHBOARD)
    };
    const onFinishFailed = async (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={cx('body')}>
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
                        name="username"
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