
type Props = {
    label: string,
    setFile: Function,
    setFileUrl: Function,
    setChangeImg: Function,
    listImg: Array<any>,
    setListImg: Function,
}

const getBase64 = (img: any, callback: any) => {
    if (img) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
};
function UploadFileCommon(props: Props) {
    const {
        label,
        setFile,
        setFileUrl,
        setChangeImg,
        listImg,
        setListImg,
    } = props;

    const handleFileChange = (event: any) => {
        getBase64(event.target.files[0], (url: any) => {
            setFile(event.target.files[0]);
            setFileUrl(url);
            setChangeImg(url);
            setListImg([
                ...listImg,
                {
                    label: "",
                    value: url
                }
            ])
        });
    };

    return (
        <div>
            <div className='mb-4 input-common'>
                <div className='title mb-2'>
                    <span>
                        <span className='label'>{label}</span>
                    </span>
                </div>
                <div className="">
                    <input type="file" id="file" onChange={handleFileChange} placeholder='Tải file' />
                </div>
            </div>
        </div>
    );
}

export default UploadFileCommon;
