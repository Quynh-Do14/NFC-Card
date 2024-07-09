import React, { useState } from 'react'
import { ButtonCommon } from '../../../../infrastructure/common/components/button/button-common'
import { Col, Row, Switch, Tooltip } from 'antd'
import ModalCommon from '../../../../infrastructure/common/components/modal/modalCommon'

const dataFake = [
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVA",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVB",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC",
        isShow: true
    },
]
type Props = {
    data: any,
    setData: Function,
    validate: any,
    setValidate: Function,
    submittedTime: any,
}
const ShopComponent = (props: Props) => {
    const {
        data,
        setData,
        validate,
        setValidate,
        submittedTime
    } = props;

    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
    const onOpenAddModal = () => {
        setIsOpenAddModal(true);
    };
    const onCloseAddModal = () => {
        setIsOpenAddModal(false);
    };
    return (
        <div className='flex flex-col gap-6'>
            <ButtonCommon
                classColor={'blue'}
                onClick={onOpenAddModal}
                title={'Thêm sản phẩm'}
                icon={<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#FFFFFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#FFFFFF" />
                </svg>}
            />
            <Row gutter={[15, 15]}>
                {
                    dataFake.map((it, index) => {
                        return (
                            <Col xs={12} sm={12} md={8} lg={12} xl={8} key={index} className='shop-product-container'>
                                <div className='flex flex-col gap-3 h-full bg-[#FFF] rounded-[16px] shadow-md p-1'>
                                    <img src={it.img} alt="" className='rounded-t-[16px]' />
                                    <div className='flex flex-col justify-between h-full gap-4 pt-2 p-2 sm:p-6 md:p-6'>
                                        <div className='text-truncate-2 text-[15px] font-semibold cursor-pointer hover:underline hover:text-[#3d7ec8] transition duration-300'>
                                            {it.name}
                                        </div>
                                        <div className='flex justify-between'>
                                            <Tooltip title="Xóa tiêu đề" placement='bottomRight'>
                                                <div className='cursor-pointer' onClick={() => { }}>
                                                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#2525259e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </Tooltip>
                                            <Switch />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
            <ModalCommon
                handleOk={() => { }}
                handleCancel={onCloseAddModal}
                visible={isOpenAddModal}
                data={data}
                setData={setData}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
        </div>
    )
}

export default ShopComponent