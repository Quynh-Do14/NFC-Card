import React from 'react'
import Constants from '../../../core/common/constants'
import { Col, Row } from 'antd'
type Props = {
    listLinkView: Array<any>,
    dataProfile: any,
    buttonType: any,
}
const LinkViewComponent = (props: Props) => {
    const {
        listLinkView,
        dataProfile,
        buttonType
    } = props
    const colorTextBtn = dataProfile?.colorTextBtn
    const fontColor = dataProfile?.fontColor

    return (
        <div className='flex flex-col gap-6 items-center'>
            {
                listLinkView.map((it, index) => {
                    if (it.isShow) {
                        if (it.isURL) {
                            if (it.layout == 1) {
                                return (
                                    <Row
                                        align={"middle"}
                                        key={index} className='rounded-[24px] px-6 py-4 w-full'
                                        style={{
                                            // background: bgBtn || "#000",
                                            borderRadius: buttonType.radius,
                                            background: buttonType.type == Constants.ConfigStyleButton.Outline.value ? "#FFF" : (buttonType.type == Constants.ConfigStyleButton.Fill.value || Constants.ConfigStyleButton.Shadow.value) && (dataProfile.bgBtn || "#000"),
                                            border: buttonType.border,
                                            borderColor: buttonType.type == Constants.ConfigStyleButton.Outline.value ? dataProfile.buttonColor : buttonType.backgroundColor || "#000",
                                            boxShadow: buttonType.shadow,
                                        }}
                                    >
                                        <Col span={4}>
                                            {
                                                it.thumbnailURL
                                                &&
                                                <img src={it.thumbnailURL} alt="" className='rounded-[50%] w-[50px]' />
                                            }
                                        </Col>
                                        <Col span={20} className='px-4'>
                                            <div className='text-[13px] font-medium text-left'
                                                style={{
                                                    color: colorTextBtn || "#FFF"
                                                }}>
                                                {it.title}
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            }
                            else {
                                return (
                                    <div key={index} className='rounded-[24px] px-6 py-4 flex flex-col justify-end items-start gap-4 w-full'
                                        style={{
                                            borderRadius: buttonType.radius,
                                            background: `url(${it.thumbnailURL})`,
                                            border: buttonType.border,
                                            borderColor: buttonType.type == Constants.ConfigStyleButton.Outline.value ? dataProfile.buttonColor : buttonType.backgroundColor || "#000",
                                            boxShadow: buttonType.shadow,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            height: "15vh"
                                        }}
                                    >
                                        <div className='text-[13px] font-medium text-left text-truncate-2'
                                            style={{
                                                color: colorTextBtn || "#FFF"
                                            }}
                                        >
                                            {it.title}
                                        </div>
                                    </div>
                                )
                            }

                        }
                        else {
                            return (
                                <div key={index}>
                                    <div className='text-[14px] text font-semibold'
                                        style={{
                                            color: fontColor
                                        }}
                                    >
                                        {it.title}
                                    </div>
                                </div>
                            )
                        }

                    }
                    return
                })
            }
        </div>
    )
}

export default LinkViewComponent