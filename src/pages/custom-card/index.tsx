import { useEffect, useState } from 'react';
import Constants from '../../core/common/constants';
import { Col, Row } from 'antd';
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout';
import CardComponent from './components/card';
import InfoComponent from './components/info';
import ListImageBGComponent from './components/list-img-bg';
import BackgroundComponent from './components/background';

const CustomCardPage = () => {
    const [listImg, setListImg] = useState<Array<any>>(Constants.ImageCard.List);
    const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
    const [widthPadding, setWidthPadding] = useState<number>(0)
    const [devideGutter, setDevideGutter] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const [_dataCard, _setDataCard] = useState<any>({});
    const dataCard = _dataCard;

    const setDataCard = (data: any) => {
        Object.assign(dataCard, { ...data });
        _setDataCard({ ...dataCard })
    }

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

        if (widthScreen < 768) {
            setDevideGutter(1)
        }
        else {
            setDevideGutter(2)
        }
    }, [widthScreen]);

    const onMouseUp = () => {
        setIsDragging(false);
    }

    return (
        <MainLayout>
            <div
                onMouseUp={onMouseUp}
                className='bg-[#FFF] h-full flex flex-col gap-2 overflow-auto p-4'>
                <div className='py-3 border-b-[2px] border-[#f2f2f0]'>
                    <h1 className='text-[24px] text-[##202020] font-bold uppercase text-center'>Thiết kế thẻ NFC</h1>
                </div>
                <Row gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className='bg-[#ffffff] shadow-md border-[1px] border-[#f2f2f0] rounded-[20px] p-4 flex flex-col gap-8'>
                            <CardComponent
                                widthScreen={widthScreen}
                                widthPadding={widthPadding}
                                devideGutter={devideGutter}
                                dataCard={dataCard}
                                isDragging={isDragging}
                                setIsDragging={setIsDragging}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className='flex flex-col gap-6'>
                            <InfoComponent
                                dataCard={dataCard}
                                setDataCard={setDataCard}
                            />
                            <BackgroundComponent
                                dataCard={dataCard}
                                setDataCard={setDataCard}
                            />
                            <ListImageBGComponent
                                listImg={listImg}
                                setListImg={setListImg}
                                dataCard={dataCard}
                                setDataCard={setDataCard}
                            />
                        </div>
                    </Col>
                </Row>
            </div >
        </MainLayout >
    )
}

export default CustomCardPage