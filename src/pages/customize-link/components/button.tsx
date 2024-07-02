import React from 'react'
import ColorPickerCommon from '../../../infrastructure/common/components/input/color-picker-common';
import { Col, Row } from 'antd';
import Constants from '../../../core/common/constants';
type Props = {
    data: any
    setData: Function,
    buttonType: any
    setButtonType: Function,
}
const ButtonComponent = (props: Props) => {
    const {
        data,
        setData,
        buttonType,
        setButtonType
    } = props;

    const onChangeButtonType = (id: number, type: string, radius: number, bg: string, border: string, shadow: string) => {
        setButtonType({
            id,
            type,
            radius,
            bg,
            border,
            shadow
        })
    };

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <div className="text-[18px] text-[#1e2330] font-semibold">Các nút</div>
            <div className='flex flex-col gap-3'>
                <div className="text-[14px] text-[#1e2330] font-semibold">Kiểu nút</div>
                <Row gutter={[20, 20]}>
                    {
                        Constants.ConfigStyleButton.List.map((it, index) => {
                            return (
                                <Col
                                    className={`${buttonType.id == it.id && "border-2 border-[#1b3f9b] "} rounded-[8px] py-2`}
                                    span={8} key={index}>
                                    <div
                                        onClick={() => onChangeButtonType(it.id, it.type, it.radius, it.bg, it.border, it.shadow)}
                                        className='h-10 cursor-pointer'
                                        style={{
                                            borderRadius: it.radius,
                                            background: it.type == Constants.ConfigStyleButton.Fill.value && data.bgBtn || it.bg,
                                            border: it.border,
                                            borderColor: it.type == Constants.ConfigStyleButton.Outline.value && data.bgBtn || it.borderColor,
                                            boxShadow: it.shadow
                                        }}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
            <ColorPickerCommon
                label={'Màu nền'}
                attribute={"bgBtn"}
                setData={setData}
                dataAttribute={data.bgBtn}
                disabled={false}
            />
            <ColorPickerCommon
                label={'Màu chữ'}
                attribute={"colorTextBtn"}
                setData={setData}
                dataAttribute={data.colorTextBtn}
                disabled={false}
            />
        </div >
    )
}

export default ButtonComponent