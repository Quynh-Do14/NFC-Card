import { QRCode } from 'antd';
import { useRef, useState } from 'react';
type Props = {
    widthScreen: number,
    widthPadding: number,
    devideGutter: number
    dataCard: any
    isDragging: boolean
    setIsDragging: Function,
}
const CardComponent = (props: Props) => {
    const {
        widthPadding,
        widthScreen,
        devideGutter,
        dataCard,
        isDragging,
        setIsDragging
    } = props;
    const maxWidth = 800;
    const maxHeight = 470;

    const [degX, setDegX] = useState<number>(0);

    const cardRef = useRef<any>(null);

    const onMouseDown = () => {
        setIsDragging(true);
    }
    const onMouseMove = (event: any) => {
        if (isDragging) {
            const card = cardRef.current;
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            // const y = event.clientY - rect.top;
            let deg = (rect.width - x) * 360 / 1000

            setDegX(deg)
        }
    }

    return (
        <div className="card-container flex flex-col items-center justify-center gap-2">
            <div className={`${isDragging ? "cursor-grabbing" : "animate cursor-grab"} card`} onMouseDown={onMouseDown} onMouseMove={onMouseMove} ref={cardRef}>
                <div className='card-rotate'
                    style={{
                        transform: `${isDragging ? `rotateY(${degX}deg)` : `rotateY(0deg)`} `,
                    }}
                >
                    <div className={`face front`}
                        style={{
                            backgroundImage: `url(${dataCard.backgroundImage})`,
                            backgroundColor: dataCard.backgroundColor || "#01a6ff",
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
                            backgroundColor: dataCard.backgroundColor || "#01a6ff",
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
            </div>
        </div >
    )
}

export default CardComponent