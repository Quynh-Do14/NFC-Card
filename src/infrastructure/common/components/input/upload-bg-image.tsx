import { Upload } from 'antd';
import { useEffect, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { configImageURL, validateFields } from '../../../helper/helper';
import "../../../../assets/styles/components/input.css"

type Props = {
    setFile: Function,
    setFileUrl: Function,
    setChangeImg: Function,
    listImg: Array<any>,
    setListImg: Function,
    attributeImg: any
}

const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
function UploadBackgroundImage(props: Props) {
    const {
        setFile,
        setFileUrl,
        setChangeImg,
        listImg,
        setListImg,
        attributeImg
    } = props;

    const inputRef = useRef(null);

    const handleChange = (info: any) => {
        if (info.file) {
            getBase64(info.file, (url: any) => {
                setFileUrl(url);
                setChangeImg(info.file);
                setListImg([
                    ...listImg,
                    {
                        label: "",
                        value: url
                    }
                ])
            });
        }
    };
    useEffect(() => {
        if (attributeImg) {
            setFileUrl(configImageURL(attributeImg))
        }
        else {
            setFileUrl(attributeImg)
        }
    }, [attributeImg])


    return (
        <div className="relative upload-common">
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader flex justify-center"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
                id='upload'
            >
                <div ref={inputRef}>
                    <PlusOutlined />
                </div>
            </Upload>
        </div>
    );
}

export default UploadBackgroundImage;
