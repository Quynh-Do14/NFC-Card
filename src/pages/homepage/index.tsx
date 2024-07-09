import { useEffect, useState } from 'react'
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout'
import { Col, QRCode, Row } from 'antd';
import "../../assets/styles/page/HomePage.css";
import nfcImg from "../../assets/images/nfc.png";
import iphoneImg from "../../assets/images/phone.png";

const HomePage = () => {
    const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
    const [widthPadding, setWidthPadding] = useState<number>(0);
    // const [devideGutter, setDevideGutter] = useState<number>(0);

    const maxWidth = 800;
    const maxHeight = 470;

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (widthScreen > 992) {
            setWidthPadding(280 + 32);
        }
        else {
            setWidthPadding(32);
        }

        // if (widthScreen < 768) {
        //     setDevideGutter(1)
        // }
        // else {
        //     setDevideGutter(2)
        // }
    }, [widthScreen]);

    return (
        <MainLayout>
            <div className='homepage-container bg-[#FFF] h-full overflow-auto p-4'>
                {/* <div className="card">
                    <div className='card-rotate'>
                        <div className={`face front`}
                            style={{
                                // backgroundImage: `url(${dataCard.backgroundImage})`,
                                backgroundColor: "#000",
                                backgroundRepeat: "round",
                                width: widthScreen - widthPadding,
                                height: (widthScreen - widthPadding) / 1.7,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <img
                                // src={dataCard.logo}
                                alt=""
                                className='object-cover'
                                style={{
                                    width: widthScreen > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen) - widthPadding) / 4.25
                                }}
                            />
                            <div>
                                <QRCode
                                    value={'http://localhost:3000/'}
                                    color={"#FFF"}
                                    bordered={false}
                                    size={widthScreen > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen) - widthPadding) / 4.25}
                                />
                            </div>
                        </div>
                        <div className={`face back`}
                            style={{
                                // backgroundImage: `url(${dataCard.backgroundImage})`,
                                backgroundColor: "#000",
                                backgroundRepeat: "round",
                                width: widthScreen - widthPadding,
                                height: (widthScreen - widthPadding) / 1.7,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className='flex justify-start'>
                                <img
                                    // src={dataCard.logo}
                                    alt=""
                                    className='object-cover'
                                    style={{
                                        width: widthScreen > maxWidth + widthPadding ? (maxWidth + widthPadding) / 4.25 : ((widthScreen) - widthPadding) / 4.25
                                    }}
                                />
                            </div>
                            <div className='flex justify-end'>
                                <div
                                    className='text-[28px] font-semibold uppercase'
                                    style={{
                                        color: "#FFF"
                                    }}
                                >
                                    NGUYEN VAN A
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-col gap- padding-common'>
                    <div className='title flex flex-col gap-2 justify-center items-center'>
                        <div className='text-[#17adfe] text-[32px] uppercase font-bold'>
                            Thiết kế thẻ NFC
                        </div>
                        <p className='text-[#414141] text-[15px] text-justify'>
                            NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                        </p>
                    </div>
                    <div className='content'>
                        <Row align={"middle"} className='introduce'>
                            <Col span={14}>
                                <div className='flex justify-start left'>
                                    <img src={nfcImg} alt="NFC" className='w-[70%]' />
                                </div>
                            </Col>
                            <Col span={10}>
                                <div className='flex flex-col gap-2 justify-center items-start right'>
                                    <div className='text-[#17adfe] text-[24px] uppercase font-semibold'>
                                        Thiết kế hiện đại
                                    </div>
                                    <p className='text-[#414141] text-[15px] text-justify'>
                                        NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row align={"middle"} className='introduce'>
                            <Col span={10}>
                                <div className='flex flex-col gap-2 justify-center items-start left'>
                                    <div className='text-[#17adfe] text-[24px] uppercase font-semibold'>
                                        Giao diện đẹp mắt <br />
                                        Độ thẩm mỹ cao
                                    </div>
                                    <p className='text-[#414141] text-[15px] text-justify'>
                                        NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                                    </p>
                                </div>
                            </Col>
                            <Col span={14}>
                                <div className='flex justify-end right'>
                                    <img src={iphoneImg} alt="NFC" className='w-[70%]' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage