import { Col, Row } from 'antd'
import InputTextCommon from '../../../infrastructure/common/components/input/input-text'
type Props = {
    dataCard: any
    setDataCard: Function,
}
const InfoComponent = (props: Props) => {
    const {
        dataCard,
        setDataCard
    } = props
    return (
        <div className='bg-[#ffffff] shadow-md border-[1px] border-[#f2f2f0] rounded-[12px] p-6 flex flex-col gap-4'>
            <h2 className="text-[18px] text-[#1e2330] font-semibold">Thông tin thẻ</h2>
            <div className='p-4'>
                <Row gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={24} xxl={12}>
                        <InputTextCommon
                            label={'Liên kết thẻ'}
                            attribute={'urlLink'}
                            isRequired={false}
                            setData={setDataCard}
                            dataAttribute={dataCard.urlLink}
                            disabled={false}
                            validate={{}}
                            setValidate={() => { }}
                            submittedTime={null}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={24} xxl={12}>
                        <InputTextCommon
                            label={'Thông tin thẻ'}
                            attribute={'infoCard'}
                            isRequired={false}
                            setData={setDataCard}
                            dataAttribute={dataCard.infoCard}
                            disabled={false}
                            validate={{}}
                            setValidate={() => { }}
                            submittedTime={null}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default InfoComponent