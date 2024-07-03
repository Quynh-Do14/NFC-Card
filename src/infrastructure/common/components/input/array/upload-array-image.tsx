import { useEffect, useState } from 'react';
import { configImageURL } from '../../../../helper/helper';
import "../../../../../assets/styles/components/input.css"
type Props = {
    label: string,
    dataAttribute: any,
    data: Array<any>,
    setData: Function,
    attribute: string,
    index: number,
    onReState?: any,
}

const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
function UploadArrayImage(props: Props) {
    const {
        label,
        dataAttribute,
        data,
        setData,
        attribute,
        index,
        onReState
    } = props;
    const [value, setValue] = useState<string>("")
    const handleChange = (event: any) => {
        getBase64(event.target.files[0], (url: any) => {
            setData((prev: Array<any>) => {
                prev[index] = {
                    ...prev[index],
                    [attribute]: url || '',
                    ["thumbnail"]: event.target.files[0] || '',
                }
                return prev;
            });
            setValue(event.target.files[0]?.name)
            onReState();
        });
    };

    useEffect(() => {
        if (data[index]) {
            setValue(data[index][attribute]);
        }
    }, [index, data, attribute]);

    return (
        <div className={`file-upload ${value ? "active" : ""}`}>
            <div className="file-select">
                <div className="file-select-button" id="fileName">{label}</div>
                <div className="file-select-name" id="noFile">
                    {
                        value ?
                            <img src={value} alt="" className='w-[60px] h-[60px]' />
                            :
                            " Chưa chọn ảnh"}
                </div>
                <input type="file" name="chooseFile" id="chooseFile" onChange={handleChange} />
            </div>
        </div>
    )
}

export default UploadArrayImage;
