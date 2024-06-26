import { Col, Row } from 'antd'
import React from 'react'
import { InputCommon } from '../../../infrastructure/common/components/input/input-text-common'
import UploadFileCommon from '../../../infrastructure/common/components/input/upload-file'
type Props = {
    urlLink: string,
    onChangUrlLink: Function,
    infoCard: string,
    onChangInfoCard: Function,
    setFile: Function,
    setFileUrl: Function
}
const InfoComponent = (props: Props) => {
    const {
        urlLink,
        onChangUrlLink,
        infoCard,
        onChangInfoCard,
        setFile,
        setFileUrl
    } = props
    return (
        <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <InputCommon
                    label={"Đường dẫn của bạn"}
                    value={urlLink}
                    onChange={onChangUrlLink}
                    disabled={false}
                />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <InputCommon
                    label={"Thông tin thẻ"}
                    value={infoCard}
                    onChange={onChangInfoCard}
                    disabled={false}
                />
            </Col>
            {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <UploadFileCommon
            label={"Thêm hình nền"}
            setFile={() => { }}
            setFileUrl={() => { }}
            setChangeImg={setChangeImg}
            listImg={listImg}
            setListImg={setListImg}
        />
    </Col> */}
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <UploadFileCommon
                    label={"Thêm logo"}
                    setFile={setFile}
                    setFileUrl={setFileUrl}
                    setChangeImg={() => { }}
                    listImg={[]}
                    setListImg={() => { }}
                />
            </Col>
        </Row>
    )
}

export default InfoComponent