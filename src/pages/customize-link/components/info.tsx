import { Col, Row } from "antd";
import InputTextCommon from "../../../infrastructure/common/components/input/input-text"
import UploadAvatar from "../../../infrastructure/common/components/input/upload-avatar";

type Props = {
    data: any
    setData: Function,
    validate: any,
    setValidate: Function,
    submittedTime: any,
}

const InfoProfileComponent = (props: Props) => {
    const {
        data,
        setData,
        validate,
        setValidate,
        submittedTime
    } = props;

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <h2 className="text-[18px] text-[#1e2330] font-semibold">Thông tin cá nhân</h2>
            <Row gutter={[20, 20]} align={"middle"}>
                <Col xs={24} sm={6} md={8} lg={8} xl={6} xxl={5}>
                    <div className='flex flex-col gap-4'>
                        <UploadAvatar
                            label={"Ảnh đại diện"}
                            attribute={"avatar"}
                            setData={setData}
                            dataAttribute={data.avatar}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={18} md={16} lg={16} xl={18} xxl={19}>
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
                        label={"Tiểu sử"}
                        attribute={"bio"}
                        isRequired={false}
                        setData={setData}
                        dataAttribute={data.bio}
                        disabled={false}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default InfoProfileComponent