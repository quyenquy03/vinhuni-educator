'use client'

import { Button, DatePicker, Form, Input, Modal, message } from "antd";
import {  useState } from "react";
import classNames from "classnames/bind";
import style from '../Modal.module.scss'
import { createTrainingCourse, updateTrainingCourse } from "@/actions";
import { useForm } from "antd/es/form/Form";
const cx = classNames.bind(style)

function ModalCreateTrainingCourse({isOpen, handleCloseModal, dataEdit, action}) {
    const [isLoading, setIsLoading] = useState(false);
    const [startYear, setStartYear] = useState();
    const [open, setOpen] = useState(isOpen)
    const [form] = useForm();
    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
        setTimeout(() => {
            handleCloseModal();
        }, 1000);
    }
    const handleOk = () => {
        
    }
    const handleSubmit = async (value) => {
        value.StartYear = startYear;
        value.CourseId = 15;
        setIsLoading(true);
        if(action == 'create') {
            const res = await createTrainingCourse(value);
            if(res && res.id) {
                message.success('Bạn đã thêm mới khóa học thành công');
                form.resetFields();
                handleCloseModal();
            }
        } else {
            const res = await updateTrainingCourse(value.id, value);
            if(res && res.id) {
                message.success('Bạn đã cập nhật khóa học thành công');
                form.resetFields();
                handleCloseModal();
            }
        }
        setIsLoading(false);
    }
    const title =  (
        <div className={cx('modal-header')}>
            <span className={cx('modal-title')}>{action == 'create' ? 'Thêm mới khóa đào tạo' : 'Chỉnh sửa khóa đào tạo'}</span>
        </div>
    );
    const content = (
        <div className={cx('modal-content')}>
            <Form form={form}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
                initialValues={dataEdit}
            >
                <Form.Item
                    label="id"
                    name="id"
                    hidden
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="Mã khóa học"
                    name="CourseCode"
                    rules={[
                        {
                        required: true,
                        message: 'Vui lòng nhập mã khóa học!',
                        },
                    ]}
                >
                    <Input placeholder="Mã khóa đào tạo" allowClear />
                </Form.Item>

                <Form.Item
                    label="Tên khóa học"
                    name="CourseName"
                    rules={[
                        {
                        required: true,
                        message: 'Vui lòng nhập tên khóa học!',
                        },
                    ]}
                >
                    <Input placeholder="Tên khóa đào tạo..." allowClear />
                </Form.Item>

                <Form.Item
                    label="Năm bắt đầu"
                    name="StartYear"
                    rules={[
                        {
                        required: true,
                        message: 'Vui lòng nhập năm bắt đầu khóa học!',
                        },
                    ]}
                    className="w-100"
                >
                    <DatePicker 
                        onChange={(date, datestring) => setStartYear(datestring)} 
                        picker="year" 
                        placeholder="Chọn năm bắt đầu"
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                    style={{marginBottom: 0}}
                >
                    <Button className="" onClick={handleCancel} htmlType="reset" danger>Hủy bỏ</Button>
                    <Button loading={isLoading} type="primary" className="font-weight-500 ml-10px" htmlType="submit">Lưu lại</Button>
                </Form.Item>
            </Form>
        </div>
    )
    return (
        <>
            
            <Modal
                title={title}
                open={open}
                onOk={handleOk}
                // width={1000}
                confirmLoading={isLoading}
                onCancel={handleCancel}
                maskClosable={false}
                footer={null}
            >
                {content}
            </Modal>
        </>
    )
}
export default ModalCreateTrainingCourse;