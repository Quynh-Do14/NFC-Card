import { Col, Modal, Row } from 'antd'
import React from 'react'
import InputTextCommon from '../input/input-text';
import InputNumberCommon from '../input/input-number';
import { ButtonCommon } from '../button/button-common';
import "../../../../assets/styles/components/modal.css"
import { CloseOutlined } from '@ant-design/icons';

type Props = {
    handleOk: Function,
    handleCancel: Function,
    visible: boolean,
    isLoading?: boolean,
    data: any,
    setData: Function,
    validate: any,
    setValidate: Function,
    submittedTime: any,
}
const ModalCommon = (props: Props) => {
    const {
        handleOk,
        handleCancel,
        visible,
        isLoading = false,
        data,
        setData,
        validate,
        setValidate,
        submittedTime
    } = props;

    return (
        <Modal
            key={"f-0"}
            centered
            visible={visible}
            closable={true}
            footer={false}
            className='custom-modal'
            onCancel={() => handleCancel()}
            closeIcon={<CloseOutlined />}

        >
            <div>
                <div className='text-[18px] text-[#1e2330] font-semibold text-center mb-5'>Thêm thông tin sản phẩm</div>
                <Row gutter={[30, 30]} justify={"center"} className='mb-7 sm:p-4 p-0'>
                    <Col sm={12} lg={12}>
                        <img src="https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg" alt="" />
                    </Col>
                    <Col md={24} lg={12}>
                        <div className='flex flex-col justify-between h-full'>
                            <Row gutter={[15, 15]}>
                                <Col span={24}>
                                    <InputTextCommon
                                        label={'Tiêu đề'}
                                        attribute={'title'}
                                        isRequired={true}
                                        setData={setData}
                                        dataAttribute={data.title}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col span={24}>
                                    <InputTextCommon
                                        label={'Liên kết'}
                                        attribute={'url'}
                                        isRequired={true}
                                        setData={setData}
                                        dataAttribute={data.url}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                                <Col span={24}>
                                    <InputNumberCommon
                                        label={'Giá'}
                                        attribute={'price'}
                                        isRequired={true}
                                        setData={setData}
                                        dataAttribute={data.price}
                                        disabled={false}
                                        validate={validate}
                                        setValidate={setValidate}
                                        submittedTime={submittedTime}
                                    />
                                </Col>
                            </Row>
                            <ButtonCommon
                                classColor={'green'}
                                onClick={() => { }}
                                title={'Thêm sản phẩm'} />
                        </div>

                    </Col>
                </Row>
            </div>

        </Modal>
    )
}

export default ModalCommon