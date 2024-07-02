import { Col, Row } from "antd";
import InputTextCommon from "../../../infrastructure/common/components/input/input-text"

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
            <div className="text-[18px] text-[#1e2330] font-semibold">Thông tin cá nhân</div>
            <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={5}>
                </Col>
            </Row>
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
                attribute={"name"}
                isRequired={false}
                setData={setData}
                dataAttribute={data.bio}
                disabled={false}
                validate={validate}
                setValidate={setValidate}
                submittedTime={submittedTime}
            />
        </div>
    )
}

export default InfoProfileComponent