import { Upload } from 'antd';
import { useEffect, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { configImageURL, validateFields } from '../../../helper/helper';
import "../../../../assets/styles/components/input.css"

type Props = {
    setFile: Function,
    setDataCard: Function,
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
        setDataCard,
        setChangeImg,
        listImg,
        setListImg,
        attributeImg
    } = props;

    const inputRef = useRef(null);

    const handleChange = (info: any) => {
        if (info.file) {
            getBase64(info.file, (url: any) => {
                setDataCard({
                    ["backgroundImageId"]: Number(listImg.length ? listImg[listImg.length - 1].label : 0) + 1 || '',
                    ["backgroundImage"]: url || '',
                    ["backgroundColor"]: ''

                });
                setChangeImg(info.file);
                setListImg([
                    ...listImg,
                    {
                        label: Number(listImg.length ? listImg[listImg.length - 1].label : 0) + 1,
                        value: url
                    }
                ])
            });
        }
    };

    useEffect(() => {
        if (attributeImg) {
            setChangeImg(configImageURL(attributeImg))
        }
        else {
            setChangeImg(attributeImg)
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
