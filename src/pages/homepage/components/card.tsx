import { QRCode } from 'antd'
import React from 'react'
type Props = {
    changeImage: string,
    widthScreen: number,
    widthPadding: number,
    fileUrl: any,
    infoCard: string,
    urlLink: string
}
const CardComponent = (props: Props) => {
    const {
        changeImage,
        widthPadding,
        widthScreen,
        fileUrl,
        infoCard,
        urlLink
    } = props
    return (
        <div className="card-container flex justify-center">
            <div className="card"
                style={{
                    backgroundImage: `url(${changeImage})`,
                    backgroundSize: "cover",
                    width: widthScreen - widthPadding,
                    height: (widthScreen - widthPadding) / 1.7,
                    maxWidth: 800,
                    maxHeight: 470
                }}
            >
                <div className="card-header">
                    <img src={fileUrl} alt="" className=' object-cover' />
                    <div>
                        <QRCode
                            value={urlLink || 'http://localhost:3000/'}
                            bgColor='#FFF'
                            size={widthScreen > 800 ? 800 / 4.25 : (widthScreen - widthPadding) / 4.25}
                        />
                    </div>

                </div>
                <div className="card-body">
                    <div className="text-[20px] font-semibold ">{infoCard}</div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent