
'use client'
import { useEffect, useState } from 'react';
import style from './profilePage.module.scss'
import classNames from 'classnames/bind';
import { Button, Flex, Popover, Tooltip, Skeleton, message, notification } from 'antd';
import Image from 'next/image';
import { MdInsertDriveFile } from 'react-icons/md';
import { FcCancel } from "react-icons/fc";
import UploadComponent from '@/components/UploadFileComponent';
import UPLOAD_PRESET from '@/constants/uploadPreset';
import { updateAvatar } from '@/actions';
import { fetchUserAvatar } from '@/redux/actions/accountAction';
import { useDispatch } from 'react-redux';
import { handleDeleteAvatar } from '@/apiService';
const cx = classNames.bind(style)

function UploadAvatar({currentAvt}) {
    const [open, setOpen] = useState(false);
    const [publicId, setPublicId] = useState("");
    const [imageUrl, setImageUrl] = useState(currentAvt);
    const [showBtnSave, setShowBtnSave] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(publicId)
        if(publicId) setShowBtnSave(false)
    }, [publicId])
    useEffect(() => {
        setImageUrl(currentAvt)
    }, [currentAvt])
    const clearData = () => {
        setOpen(false)
        setImageUrl(currentAvt)
        setPublicId("")
        setShowBtnSave(true);
    }
    const handleSaveAvatar = async () => {
        setIsLoading(true)
        const res = await updateAvatar(imageUrl);
        console.log(res)
        if(res.statusCode == 200) {
            message.success('Cập nhật thông tin cá nhân thành công!');
            dispatch(fetchUserAvatar(imageUrl));
            clearData();
        } else if(res.statusCode == 400) {
            message.success('Hình ảnh không hợp lệ!');
        } 
        else {
            message.error('Hệ thống đang bị lỗi, vui lòng chờ trong giây lát');
        }
        setIsLoading(false)
    }
    const handleCancel = async() => {
        setOpen(false);
        if(publicId) {
            const res = await handleDeleteAvatar(publicId)
            clearData();
        }
    }

    const title = (
        <div className={cx('upload-avt-title')}>
            Cập nhật ảnh đại diện
        </div>
    )
    const content = (
        <div className={cx('upload-avatar-wapper')}>
            <div className={cx('avatar-upload')}>
                <Image
                    alt="avatar"
                    src={imageUrl ?? '/user.png'}
                    className={cx('avatar')}
                    width={80}
                    height={80}
                    style={{borderRadius: '50%'}}
                />
                <div className={cx('upload-action')}>
                    <Tooltip placement="bottom" title="Hủy bỏ" color={'linear-gradient(41deg, rgba(255,87,87,0.9372199563419118) 0%, rgba(248,191,6,1) 52%, rgba(255,87,87,0.9176121132046569) 100%)'}>
                        <Button danger className={cx('upload-action-btn')} onClick={handleCancel}><FcCancel /></Button>
                    </Tooltip>
                    <UploadComponent
                        setImageUrl={setImageUrl} 
                        setPublicId={setPublicId}
                        uploadPreset={UPLOAD_PRESET.UPLOAD_AVATAR}
                        style={{
                            width: '70px'
                        }}
                    />
                    <Tooltip placement="bottom" title="Lưu lại" color={'linear-gradient(41deg, rgba(255,87,87,0.9372199563419118) 0%, rgba(248,191,6,1) 52%, rgba(255,87,87,0.9176121132046569) 100%)'}>
                        <Button loading={isLoading} onClick={handleSaveAvatar} disabled={showBtnSave} type='primary' className={cx('upload-action-btn')}><MdInsertDriveFile /></Button>
                    </Tooltip>
                    
                </div>
            </div>
        </div>
    )

    return (
        <Popover
            content={content}
            title={title}
            trigger="click"
            open={open}
            placement='bottom'
        >
            <div className={cx('leftbox-avatar')}>
                <Image
                    alt="avatar"
                    src={currentAvt ?? "/user.png"}
                    className={cx('avatar')}
                    width={100}
                    height={100}
                />
                <span onClick={() => setOpen(true)} className={cx('camera-icon')}>
                    <Image
                        alt="camera"
                        src="/camera.png"
                        width={30}
                        height={30}
                        // onClick={() => alert('hello')}
                    />
                </span>
            </div>
        </Popover>
    )
}
export default UploadAvatar;