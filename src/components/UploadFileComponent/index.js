'use client'
import { Tooltip } from 'antd';
import { CldUploadWidget } from 'next-cloudinary';
import { MdCloudUpload } from 'react-icons/md';
const UploadComponent = ({style, uploadPreset, setImageUrl, setPublicId}) => {

    const handeUploadSuccess = (result) => {
        if (result && result.event === "success") {
            console.log(result)
            setPublicId(result.info.public_id);
            setImageUrl(result.info.url);
            // const myImage = cld.image(result.info.public_id);
            // setImageUpload(myImage)
          }
    }
    return (
        <>
            <CldUploadWidget 
                uploadPreset={uploadPreset}
                onSuccess={(result) => handeUploadSuccess(result)}
            >
                {({ open }) => {
                    return (
                        <Tooltip placement="bottom" title="Tải ảnh lên" color={'linear-gradient(41deg, rgba(255,87,87,0.9372199563419118) 0%, rgba(248,191,6,1) 52%, rgba(255,87,87,0.9176121132046569) 100%)'}>
                            <button
                                id="upload_widget"
                                onClick={() => open()}
                                style={{
                                border: '1px solid #ccc',
                                background: 'var(--primary-color)',
                                color: '#fff',
                                padding: '6px 8px',
                                fontSize: '20px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...style,
                                }}
                            >
                                <MdCloudUpload />
                            </button>
                            </Tooltip>
                    );
                }}
            </CldUploadWidget>
        </>
    )
}
export default UploadComponent;