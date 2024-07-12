import { Col, Row } from 'antd'
import nfcImg from "../../../assets/images/nfc.png";
import iphoneImg from "../../../assets/images/phone.png";
import { useEffect, useRef, useState } from 'react';

const ContentComponent = () => {

    const textRef = useRef<any>(null);
    const [isAnimate, setIsAnimate] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAnimate(entry.isIntersecting);
            },
            {
                threshold: 0.1 // Adjust this value to determine when the section is considered "in view"
            }
        );

        const currentSectionRef = textRef.current;
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    return (
        <div className='flex flex-col gap-4 content padding-common'>
            <div className='title flex flex-col gap-2 justify-center items-center'>
                <h2 className='text-[#17adfe] text-[20px] md:text-[24px] lg:text-[24px] uppercase font-bold'>
                    Thiết kế thẻ NFC
                </h2>
                <p className='text-[#414141] text-[15px] text-justify'>
                    NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                </p>
            </div>
            <div>
                <Row gutter={[30, 30]} align={"middle"} className='introduce'>
                    <Col sm={24} md={14}>
                        <div className='flex justify-start left'>
                            <img src={nfcImg} alt="NFC" className='w-[70%]' />
                        </div>
                    </Col>
                    <Col sm={24} md={10}>
                        <div className='flex flex-col gap-2 justify-center items-start right'>
                            <h3 className='text-[#17adfe] text-[20px] md:text-[24px] lg:text-[24px] uppercase font-semibold'>
                                Thiết kế hiện đại
                            </h3>
                            <h4 className='text-[#414141] text-[15px] text-justify'>
                                NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                            </h4>
                        </div>
                    </Col>
                </Row>
                <Row align={"middle"} className='introduce'>
                    <Col sm={24} md={10}>
                        <div className='flex flex-col gap-2 justify-center items-start left'>
                            <h3 className='text-[#17adfe] text-[20px] md:text-[24px] lg:text-[24px] uppercase font-semibold'>
                                Giao diện đẹp mắt, Độ thẩm mỹ cao
                            </h3>
                            <h4 className='text-[#414141] text-[15px] text-justify'>
                                NFC (Near-Field Communications) là công nghệ kết nối không dây tầm ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai nghe,…) khi có sự tiếp xúc trực tiếp (chạm)
                            </h4>
                        </div>
                    </Col>
                    <Col sm={24} md={14}>
                        <div className='flex justify-end right'>
                            <img src={iphoneImg} alt="NFC" className='w-[70%]' />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ContentComponent