'use client'
import DeleteButton from "@/components/Button/DeleteButton";
import EditButton from "@/components/Button/EditButton";
import { Button, Col, Flex, Pagination, Row, Table, message } from "antd";
import style from '../TrainingCourse.module.scss'
import classNames from "classnames/bind";
import ModalCreateTrainingCourse from "@/components/Modal/ModalTrainingCourse";
import { useState } from "react";
import { deleteTrainingCourse, getTrainingCourseById } from "@/actions";
const cx = classNames.bind(style)
const RenderTrainingCourseTable = ({data}) => {
    const [dataEdit, setDataEdit] = useState();
    const [action, setAction] = useState('create');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const handleEdit = (data) => {
        setAction('edit')
        const fetchData = async() => {
            setIsLoading(true);
            const res = await getTrainingCourseById(data.id);
            if(res && res.id) {
                delete res.StartYear;
                setDataEdit(res);
            }
            setIsLoading(false)
            setIsOpen(true);
        }
        fetchData();
    }
    const handleCreate = () => {
        setAction('create');
        setDataEdit(null);
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
        setDataEdit(null)
    }
    const handleConfirmDelete = async (record) => {
        setIsLoading(true)
        const res = await deleteTrainingCourse(record.id);
        if(res) {
            message.success('Đã xóa thành công');
        }
        setIsLoading(false)
    }
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            // sorter: {
            //     compare: (a, b) => a.key - b.key,
            //     multiple: 3,
            // },
          align: 'center',
          width: 60
        },
        {
            title: 'Mã khóa',
            dataIndex: 'CourseCode',
            key: 'CourseCode',
            align: 'center',
            width: 100
        },
        {
            title: 'Tên khóa',
            dataIndex: 'CourseName',
            key: 'CourseName',
            align: 'center',
            width: 150
        },
        {
            title: 'Năm bắt đầu',
            dataIndex: 'StartYear',
            key: 'StartYear',
            align: 'center',
            width: 150
        },
        {
            title: 'Tác vụ',
            key: 'operation',
            align: 'center',
            fixed: 'right',
            width: 75,
            render: (_, record) => (
                <Flex gap="small" wrap="wrap" justify='center'>
                    <EditButton  onClick={() => handleEdit(record)} />
                    <DeleteButton onConfirm={() => handleConfirmDelete(record)} title='Xác nhận xóa khóa này' />
                </Flex>
            ),
        },
      ];
    
    
    return (
        <>
            <Table loading={isLoading} className={cx("table-custom")} bordered columns={columns} dataSource={data} pagination={false} scroll={{ x: 800 }} />
            <Row className="mt-3" justify={'space-between'} gutter={[10, 10]}>
                <Col sm={24} md={6}>
                    <Button onClick={handleCreate} className="bg-info font-weight-500 text-white" >Thêm mới</Button>
                    {isOpen && <ModalCreateTrainingCourse action={action} dataEdit={dataEdit} isOpen={isOpen} handleCloseModal={handleCloseModal} />}
                </Col>
                <Col sm={24} md={18}>
                    <div style={{textAlign: 'end'}}>
                        <Pagination 
                            size="small" 
                            onChange={() => console.log('hi')} 
                            total={85}
                            pageSize={10}
                            // defaultPageSize={10}
                            showSizeChanger={false}
                            // showQuickJumper
                            // showTotal={(total) => `Total ${total} items`} 
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default RenderTrainingCourseTable;