import { QRCode } from 'antd'
import React from 'react'
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

    return (
        <div className="card-container flex justify-center">
            <div className="card"
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
            {/* <div className="card-body">
                <div className="text-[20px] font-semibold ">{dataCard.infoCard}</div>
            </div> */}
        </div >
    )
}

export default CardComponent