import React from 'react'
import Constants from '../../../core/common/constants'
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
        <div className='flex flex-col gap-6 items-center w-full'>
            {
                listLinkView.map((it, index) => {
                    if (it.isShow) {
                        if (it.isURL) {
                            return (
                                <div key={index} className='rounded-[24px] px-6 py-4'
                                    style={{
                                        // background: bgBtn || "#000",
                                        borderRadius: buttonType.radius,
                                        background: buttonType.type == Constants.ConfigStyleButton.Outline.value ? "#FFF" : (buttonType.type == Constants.ConfigStyleButton.Fill.value || Constants.ConfigStyleButton.Shadow.value) && (dataProfile.bgBtn || "#000"),
                                        border: buttonType.border,
                                        borderColor: buttonType.type == Constants.ConfigStyleButton.Outline.value ? dataProfile.bgBtn : buttonType.bg || "#000",
                                        boxShadow: buttonType.shadow
                                    }}
                                >
                                    <div className='text-[13px] font-medium text-center'
                                        style={{
                                            color: colorTextBtn || "#FFF"
                                        }}
                                    >
                                        {it.title}
                                    </div>
                                </div>
                            )
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