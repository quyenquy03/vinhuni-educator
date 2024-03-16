import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

const DeleteButton = ({title, onConfirm }) => {
    return (
        <Popconfirm okText="Xác nhận" onConfirm={onConfirm} cancelText="Hủy bỏ"  title={title || 'Xác nhận xóa'}  >
            <Button size="small" danger icon={<DeleteOutlined />} />
        </Popconfirm>
    )
}
export default DeleteButton;