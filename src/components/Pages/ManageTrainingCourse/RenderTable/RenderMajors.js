'use client'
import DeleteButton from "@/components/Button/DeleteButton";
import EditButton from "@/components/Button/EditButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Table } from "antd";

const RenderMajorsTable = ({data}) => {
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
            title: 'Mã ngành',
            dataIndex: 'MajorCode',
            key: 'MajorName',
            align: 'center',
            width: 100
        },
        {
            title: 'Tên ngành',
            dataIndex: 'MajorName',
            key: '1',
            align: 'center',
            width: 250
        },
        {
            title: 'Thời gian đào tạo',
            children: [
                {
                    title: 'Tối thiểu',
                    dataIndex: 'MinTrainingTime',
                    key: '1',
                    align: 'center',
                    width: 80
                },
                {
                    title: 'Tối đa',
                    dataIndex: 'MaxTrainingTime',
                    key: '1',
                    align: 'center',
                    width: 80
                },
            ],
        },
        {
          title: 'Tác vụ',
          key: 'operation',
          align: 'center',
          fixed: 'right',
          width: 75,
          render: (_, record) => (
            <Flex gap="small" wrap="wrap" justify='center'>
                <EditButton />
                <DeleteButton title='Xác nhận xóa ngành này' />
            </Flex>
            ),
        },
      ];
    return (
        <Table bordered columns={columns} dataSource={data} pagination={{ pageSize: 5 }} scroll={{ x: 800 }} />
    )
}
export default RenderMajorsTable;