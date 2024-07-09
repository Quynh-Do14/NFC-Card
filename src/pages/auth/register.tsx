import React, { useState } from 'react'
import InputTextCommon from '../../infrastructure/common/components/input/input-text'
import { useNavigate } from 'react-router-dom';
import InputPasswordCommon from '../../infrastructure/common/components/input/input-password';
import { ButtonCommon } from '../../infrastructure/common/components/button/button-common';
type Props = {
    onOpenLoginPage: Function,
}
const RegisterPage = (props: Props) => {
    const {
        onOpenLoginPage
    } = props;

    const [validate, setValidate] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [submittedTime, setSubmittedTime] = useState<any>();
    const [_dataProfile, _setDataProfile] = useState<any>({});
    const dataProfile = _dataProfile;

    const setDataProfile = (data: any) => {
        Object.assign(dataProfile, { ...data });
        _setDataProfile({ ...dataProfile })
    }
    const navigate = useNavigate();
    const isValidData = () => {
        let allRequestOK = true;

        setValidate({ ...validate });

        Object.values(validate).forEach((it: any) => {
            if (it.isError === true) {
                allRequestOK = false;
            }
        });
        return allRequestOK;
    };
    return (
        <div className='flex flex-col justify-center gap-8 padding-common h-[100vh]'>
            <div className='text-[40px] font-bold text-center'>Đăng kí ngay để trải nghiệm!</div>
            <div className='flex flex-col gap-1'>
                <InputTextCommon
                    label={"Tên đăng nhập"}
                    attribute={"username"}
                    isRequired={false}
                    setData={setDataProfile}
                    dataAttribute={dataProfile.username}
                    disabled={false}
                    validate={validate}
                    setValidate={setValidate}
                    submittedTime={submittedTime}
                />
                <InputPasswordCommon
                    label={"Mật khẩu"}
                    attribute={"password"}
                    isRequired={false}
                    setData={setDataProfile}
                    dataAttribute={dataProfile.password}
                    disabled={false}
                    validate={validate}
                    setValidate={setValidate}
                    submittedTime={submittedTime}
                />
            </div>
            <ButtonCommon
                classColor={'green'}
                onClick={() => { }}
                title={'Đăng nhập'}
            />
            <div className='flex justify-center gap-1 text-[15px]'>
                <div>Bạn đã có tài khoản?</div>
                <div
                    onClick={() => onOpenLoginPage()}
                    className='font-semibold cursor-pointer hover:underline duration-300'
                >
                    Đăng nhập
                </div>
            </div>
        </div>
    )
}

export default RegisterPage