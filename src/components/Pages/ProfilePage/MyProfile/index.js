'use client'
import classNames from 'classnames/bind';
import style from '../profilePage.module.scss'
import { Button, DatePicker, Form, Input, Radio, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import { updateProfile } from '@/actions';
import { setCurrentUser } from '@/redux/actions/accountAction';
// import UploadAvatarComponent from '@/components/UploadAvatarComponent';

const cx = classNames.bind(style)
const MyProfileComponent = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.accountReducer);
    const [gender, setGender] = useState(currentUser?.gender);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [birthday, setBirthday] = useState(dayjs(currentUser?.dateOfBirth, 'YYYY-MM-DD'))

    const handleChangeBirthday = (e) => {
        setBirthday(e)
    }
    const handleSubmit = async(value) => {
        setIsLoading(true)
        const data = {
            ...value,
            gender: gender,
            dateOfBirth: birthday.format('YYYY-MM-DD')
        };
        const res = await updateProfile(data);
        console.log(res)
        if(res.statusCode == 200 && res.data) {
            message.success('Cập nhật thông tin cá nhân thành công!');
            dispatch(setCurrentUser(res.data));
            setIsDisabled(true);
        } else if(res.statusCode == 400) {
            message.success('Thông tin nhập vào không hợp lệ, vui lòng kiểm tra lại!');
        } 
        else {
            message.error('Hệ thống đang bị lỗi, vui lòng chờ trong giây lát');
        }
        setIsLoading(false);
    }
    useLayoutEffect(() => {
        setBirthday(dayjs(currentUser?.dateOfBirth, 'YYYY-MM-DD'))
    }, [currentUser?.dateOfBirth])
    useLayoutEffect(() => {
        setGender(currentUser?.gender)
    }, [currentUser?.gender])


    return (
        <div className={cx('myprofile-wrapper')}>
            <div className={cx('header-wrapper')}>
                <span className={cx('header-title')}>Hồ sơ cá nhân</span>
            </div>
            {/* <UploadAvatarComponent /> */}
            <div className={cx('body-wrapper')}>
                {currentUser.id ? 
                    <Form
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 17 }}
                        labelAlign="left"
                        initialValues={currentUser}
                        onFinish={handleSubmit}
                        disabled = {isDisabled}
                    >
                        <Form.Item 
                            className={cx('form-item')} 
                            label="Tên tài khoản"
                            rules={[
                                {
                                    required: true,
                                    message: 'Tên tài khoản không được để trống!',
                                },
                            ]}
                            name='userName'
                        >
                            <Input className={cx('form-input')} placeholder="Tên tài khoản" />
                        </Form.Item> 

                        <Form.Item className={cx('form-item')} label="Họ và tên" style={{marginBottom: 0}}>
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Họ đệm không được để trống!',
                                    },
                                ]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input className={cx('form-input')} placeholder="Họ đệm" />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tên người dùng không được để trống!',
                                    },
                                ]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
                            >
                                <Input className={cx('form-input')} placeholder="Tên người dùng" />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item className={cx('form-item')} label="Giới tính" style={{marginBottom: 0}}>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}  
                                name='gender'
                            >
                                <Radio.Group onChange={e => setGender(e.target.value)} value={currentUser.gender}>
                                    <Radio value={1}> Nam </Radio>
                                    <Radio value={0}> Nữ </Radio>
                                    <Radio value={2}> Giới tính khác </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form.Item> 
                        <Form.Item className={cx('form-item')} label="Ngày sinh" style={{marginBottom: 0}}>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ngày sinh không được để trống!',
                                    },
                                ]}
                            > 
                                <DatePicker 
                                    value={birthday} 
                                    onChange={(e) => handleChangeBirthday(e)} 
                                    allowClear={false} 
                                    format={'DD/MM/YYYY'} className={cx('form-item')} 
                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item 
                            className={cx('form-item')} 
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống!',
                                },
                            ]}
                            name='email'
                        >
                            <Input className={cx('form-input')} placeholder="Email" />
                        </Form.Item>
                        <Form.Item 
                            className={cx('form-item')} 
                            label="Số điện thoại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Số điện thoại không được để trống!',
                                },
                            ]}
                            name='phoneNumber'
                        >
                            <Input className={cx('form-input')} placeholder="Số điện thoại" />
                        </Form.Item> 
                        <Form.Item 
                            className={cx('form-item')} 
                            label="Địa chỉ"
                            rules={[
                                    {
                                        required: true,
                                        message: 'Địa chỉ không được để trống!',
                                    },
                                ]}
                            name='address'
                        >
                            <Input className={cx('form-input')} placeholder="Địa chỉ" />
                        </Form.Item>
                        <div className={cx('button-box')}>
                            {
                                isDisabled ? 
                                    <span className={cx('form-btn', 'btn-active-form')} onClick={() => setIsDisabled(false)}>Cập nhật hồ sơ</span>
                                :
                                <>
                                    <Button loading={isLoading} size='large' onClick={() => setIsDisabled(true)} danger style={{margin: '0 8px'}}>Hủy bỏ</Button>
                                    <Button loading={isLoading} size='large' type='primary' htmlType='submit'>Lưu lại</Button>
                                </>    
                            }
                        </div> 
                    </Form>
                    : 
                    <>
                        Skeleton
                    </> 
                }
            </div>
        </div>
    )
}
export default MyProfileComponent;