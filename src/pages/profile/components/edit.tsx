import { ButtonCommon } from "../../../infrastructure/common/components/button/button-common";
import InputTextCommon from "../../../infrastructure/common/components/input/input-text"

type Props = {
    data: any
    setData: Function,
    validate: any,
    setValidate: Function,
    submittedTime: any,
}

const EidtProfileComponent = (props: Props) => {
    const {
        data,
        setData,
        validate,
        setValidate,
        submittedTime
    } = props;

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <h2 className="text-[18px] text-[#1e2330] font-semibold">Thông tin</h2>
            <InputTextCommon
                label={"Tên"}
                attribute={"name"}
                isRequired={false}
                setData={setData}
                dataAttribute={data.name}
                disabled={false}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
            <InputTextCommon
                label={"Email"}
                attribute={"email"}
                isRequired={false}
                setData={setData}
                dataAttribute={data.email}
                disabled={false}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
            <InputTextCommon
                label={"Ngày sinh"}
                attribute={"dob"}
                isRequired={false}
                setData={setData}
                dataAttribute={data.dob}
                disabled={false}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
            <InputTextCommon
                label={"Liên kết"}
                attribute={"urlLink"}
                isRequired={false}
                setData={setData}
                dataAttribute={data.urlLink}
                disabled={false}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
            <ButtonCommon
                classColor={'blue'}
                onClick={() => { }}
                title={'Thay đổi thông tin'}
            />
            <ButtonCommon
                classColor={'red'}
                onClick={() => { }}
                title={'Xóa tài khoản'}
                icon={<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#282828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}
            />
        </div >
    )
}

export default EidtProfileComponent