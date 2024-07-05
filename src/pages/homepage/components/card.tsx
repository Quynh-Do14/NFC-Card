import { QRCode } from 'antd'
import React, { useState } from 'react'
import { ButtonCommon } from '../../../infrastructure/common/components/button/button-common'
type Props = {
    widthScreen: number,
    widthPadding: number,
    devideGutter: number
    fileUrl: any,
    dataCard: any
}
const CardComponent = (props: Props) => {
    const {
        widthPadding,
        widthScreen,
        devideGutter,
        fileUrl,
        dataCard
    } = props;
    const maxWidth = 800;
    const maxHeight = 470;

    const [isFrstFace, setIsFrstFace] = useState<boolean>(true)
    const onRotate = () => {
        setIsFrstFace(!isFrstFace)
    }
    return (
        <div className="card-container flex flex-col items-center justify-center gap-2">
            <div className='card'>
                <div className={`face front`}
                    style={{
                        backgroundImage: `url(${dataCard.backgroundImage})`,
                        backgroundColor: dataCard.backgroundColor || "#000",
                        backgroundRepeat: "round",
                        width: widthScreen / devideGutter - widthPadding,
                        height: (widthScreen / devideGutter - widthPadding) / 1.7,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={dataCard.logo}
                        alt=""
                        className='object-cover'
                        style={{
                            width: widthScreen / devideGutter > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen / devideGutter) - widthPadding) / 4.25
                        }}
                    />
                    <div>
                        <QRCode
                            value={dataCard.urlLink || 'http://localhost:3000/'}
                            color={dataCard.backgroundColorQRCode || "#FFF"}
                            bordered={false}
                            size={widthScreen / devideGutter > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen / devideGutter) - widthPadding) / 4.25}
                        />
                    </div>
                </div>
                <div className={`face back`}
                    style={{
                        backgroundImage: `url(${dataCard.backgroundImage})`,
                        backgroundColor: dataCard.backgroundColor || "#000",
                        backgroundRepeat: "round",
                        width: widthScreen / devideGutter - widthPadding,
                        height: (widthScreen / devideGutter - widthPadding) / 1.7,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div className='flex justify-start'>
                        <img
                            src={dataCard.logo}
                            alt=""
                            className='object-cover'
                            style={{
                                width: widthScreen / devideGutter > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen / devideGutter) - widthPadding) / 4.25
                            }}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <div
                            className='text-[28px] font-semibold uppercase'
                            style={{
                                color: dataCard.textColor || "#FFF"
                            }}
                        >
                            {dataCard.infoCard}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ButtonCommon
                classColor={'black'}
                onClick={onRotate}
                title={"Xoay thẻ"}
                icon={
                    <svg fill="#FFF" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.707,11.293a1,1,0,0,1,0,1.414l-4,4a1,1,0,0,1-1.414-1.414L19.586,12,16.293,8.707a1,1,0,1,1,1.414-1.414ZM7,17a1,1,0,0,0,.707-1.707L4.414,12,7.707,8.707A1,1,0,1,0,6.293,7.293l-4,4a1,1,0,0,0,0,1.414l4,4A1,1,0,0,0,7,17Z" /></svg>
                }
            /> */}
        </div >
    )
}

export default CardComponent