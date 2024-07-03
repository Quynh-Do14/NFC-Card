import { Upload } from 'antd';
import { useEffect, useRef } from 'react';
import { configImageURL } from '../../../helper/helper';
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
                className="avatar-uploader flex justify-center card"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
                id='upload'
            >
                <div className='flex flex-col gap-1 items-center' ref={inputRef}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V11H17C18.933 11 20.5 12.567 20.5 14.5C20.5 16.433 18.933 18 17 18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H17C20.0376 20 22.5 17.5376 22.5 14.5C22.5 11.7793 20.5245 9.51997 17.9296 9.07824C17.4862 6.20213 15.0003 4 12 4C8.99974 4 6.51381 6.20213 6.07036 9.07824C3.47551 9.51997 1.5 11.7793 1.5 14.5C1.5 17.5376 3.96243 20 7 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H7C5.067 18 3.5 16.433 3.5 14.5C3.5 12.567 5.067 11 7 11H8V10ZM15.7071 13.2929L12.7071 10.2929C12.3166 9.90237 11.6834 9.90237 11.2929 10.2929L8.29289 13.2929C7.90237 13.6834 7.90237 14.3166 8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071L11 13.4142V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13.4142L14.2929 14.7071C14.6834 15.0976 15.3166 15.0976 15.7071 14.7071C16.0976 14.3166 16.0976 13.6834 15.7071 13.2929Z" fill="#443b3b" />
                    </svg>
                    <div className='text-[14px] text-[#443b3b] font-bold uppercase'>
                        Chọn hình ảnh từ thiết bị
                    </div>
                </div>
            </Upload>
        </div>
    );
}

export default UploadBackgroundImage;
