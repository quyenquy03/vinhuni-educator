
import { EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import style from './button.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(style)
const EditButton = ({className, ...props}) => {
    return (
        <Tooltip placement="bottom" title="Chỉnh sửa" color={'linear-gradient(41deg, rgba(255,87,87,0.9372199563419118) 0%, rgba(248,191,6,1) 52%, rgba(255,87,87,0.9176121132046569) 100%)'} >
            <Button {...props} type="" size="small" className={cx('btn-edit', {
                [className]: className
            })} icon={<EditOutlined />} />
        </Tooltip>
    )
}
export default EditButton;