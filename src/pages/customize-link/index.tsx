import React, { useState } from 'react'
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout'
import ViewMobile from '../view-moblie/view'
import { Col, Row } from 'antd'
import InfoProfileComponent from './components/info'
import BackgroundComponent from './components/background'
import ButtonComponent from './components/button'
import FontComponent from './components/font'

const listLink = [
    {
        id: 1,
        title: "Senior Front-End Developer",
        isURL: false,
        isShow: true,
    },
    {
        id: 2,
        title: "Senior Front-End Developer",
        content: "https://www.youtube.com/watch?v=DZDYZ9nRHfU&list=RDkNPX8folSyo&index=5",
        isURL: true,
        isShow: true,
    },
]
const CustomizeLinkPage = () => {
    const [isPreview, setIsPreview] = useState<boolean>(false);
    const [selectIndex, setSelectIndex] = useState(1);
    const [buttonType, setButtonType] = useState<any>({});

    const [validate, setValidate] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [submittedTime, setSubmittedTime] = useState<any>();
    const [_dataProfile, _setDataProfile] = useState<any>({});
    const dataProfile = _dataProfile;

    const setDataProfile = (data: any) => {
        Object.assign(dataProfile, { ...data });
        _setDataProfile({ ...dataProfile })
    }

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

    const onPreview = () => {
        setIsPreview(!isPreview);
    };

    return (
        <MainLayout>
            <div className='customize-link-container h-full flex-1 overflow-auto'>
                <Row className='link-container scroll-auto'>
                    <Col xs={24} sm={24} lg={16} xl={16} className='sm:mt-0 lg:mt-20'>
                        <div className='flex flex-col gap-6 padding-link'>
                            <InfoProfileComponent
                                data={dataProfile}
                                setData={setDataProfile}
                                validate={validate}
                                setValidate={setValidate}
                                submittedTime={submittedTime}
                            />
                            <BackgroundComponent
                                data={dataProfile}
                                setData={setDataProfile}
                            />
                            <ButtonComponent
                                data={dataProfile}
                                setData={setDataProfile}
                                buttonType={buttonType}
                                setButtonType={setButtonType}
                            />
                            <FontComponent
                                data={dataProfile}
                                setData={setDataProfile}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} lg={8} xl={8}>
                        <ViewMobile
                            selectIndex={selectIndex}
                            setSelectIndex={setSelectIndex}
                            listLink={listLink}
                            listEditAvailable={[]}
                            isPreview={isPreview}
                            dataProfile={dataProfile}
                            buttonType={buttonType}
                        />
                    </Col>
                    <div className='preview'>
                        <div
                            className='text-[16px] font-semibold bg-white px-4 py-3 rounded-[20px] shadow-lg cursor-pointer'
                            onClick={onPreview}
                        >
                            {!isPreview ?

                                <div className='flex items-center gap-1'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5" />
                                    </svg>
                                    <div>
                                        Xem trước
                                    </div>
                                </div>
                                :
                                <div className='flex items-center gap-1'>
                                    <svg fill="#e04e4e" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                                    </svg>
                                    <div className='text-[#e04e4e]'>
                                        Hủy
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </Row>
            </div>
        </MainLayout>
    )
}

export default CustomizeLinkPage