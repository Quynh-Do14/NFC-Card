import { Upload } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { configImageURL, validateFields } from '../../../helper/helper';
import { MessageError } from '../controls/MessageError';

type Props = {
    label: string,
    attributeImg: any,
    setAvatar: Function,
    imageUrl: any,
    setImageUrl: Function,
    validate: any,
    setValidate: Function,
    submittedTime: any,
    attribute: string,
    isRequired: boolean,
}

const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
function UploadImage(props: Props) {
    const {
        label,
        attributeImg,
        setAvatar,
        imageUrl,
        setImageUrl,
        attribute,
        submittedTime,
        isRequired,
        setValidate,
        validate,
    } = props;
    const [value, setValue] = useState<string>("")
    const handleChange = (event: any) => {
        getBase64(event.target.files[0], (url: any) => {
            setImageUrl({
                [attribute]: url || ''
            });
            setAvatar(event.target.files[0]);
            setValue(event.target.files[0]?.name)
        });
    };

    useEffect(() => {
        if (attributeImg) {
            setImageUrl(configImageURL(attributeImg))
        }
        else {
            setImageUrl(attributeImg)
        }
    }, [attributeImg])

    const labelLower = label?.toLowerCase();

    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attribute, !imageUrl, setValidate, validate, !imageUrl ? `Vui lòng tải ${labelLower}` : "");
        }
    };

    useEffect(() => {
        if (submittedTime != null) {
            onBlur(true);
        }
    }, [submittedTime]);

    return (
        <div className={`file-upload ${value ? "active" : ""}`}>
            <div className="file-select">
                <div className="file-select-button" id="fileName">{label}</div>
                <div className="file-select-name" id="noFile">{value ? value : " Chưa chọn ảnh"}</div>
                <input type="file" name="chooseFile" id="chooseFile" onChange={handleChange} />
            </div>
        </div>
    )
}

export default UploadImage;
