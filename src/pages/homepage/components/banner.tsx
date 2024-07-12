import React from 'react'
import phoneImg from "../../../assets/images/phone.png";
import nfcImg from "../../../assets/images/nfc.png";

import { Col, Row } from 'antd';
const BannerComponent = () => {
    return (
        <div className='banner'>
            <div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>

            </div>
            <Row align={"middle"} justify={"space-between"}>
                <Col xs={24} sm={24} md={0}>
                    <div className='top flex flex-col gap-2 items-center text'>
                        <h1 className='text-[#ffffff] text-center text-[24px] md:text-[20px] lg:text-[24px] xl:text-[40px]  uppercase font-bold'>
                            Thiết kế thẻ NFC
                        </h1>
                        <h2 className='text-[#ffffff] text-center text-[20px] md:text-[16px] lg:text-[20px] xl:text-[32px] uppercase font-bold'>
                            Sức mạnh của sự gần gũi
                        </h2>
                        <h2 className='text-[#ffffff] text-center text-[20px] md:text-[16px] lg:text-[20px] xl:text-[28px] uppercase'>
                            Kết nối liền mạch,<br /> chỉ với một lần chạm
                        </h2>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={8}>
                    <div className="right">
                        <img src={nfcImg} alt="NFC" />
                    </div>
                </Col>
                <Col xs={0} sm={0} md={8}>
                    <div className='top flex flex-col gap-2 items-center text'>
                        <h1 className='text-[#ffffff] text-center text-[12px] md:text-[24px] lg:text-[24px] xl:text-[40px]  uppercase font-bold'>
                            Thiết kế thẻ NFC
                        </h1>
                        <h2 className='text-[#ffffff] text-center text-[10px] md:text-[20px] lg:text-[20px] xl:text-[32px] uppercase font-bold'>
                            Sức mạnh của sự gần gũi
                        </h2>
                        <h2 className='text-[#ffffff] text-center text-[10px] md:text-[20px] lg:text-[20px] xl:text-[28px] uppercase'>
                            Kết nối liền mạch,<br /> chỉ với một lần chạm
                        </h2>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={8}>
                    <div className="left">
                        <img src={phoneImg} alt="NFC" />
                    </div>
                </Col>
            </Row>

        </div >
    )
}

export default BannerComponent