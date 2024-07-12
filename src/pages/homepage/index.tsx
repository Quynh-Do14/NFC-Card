import { useEffect, useState } from 'react'
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout'
import "../../assets/styles/page/HomePage.css";
import ContentComponent from './components/content';
import BannerComponent from './components/banner';
import VideoComponent from './components/video';


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
            <div className='homepage-container bg-[#FFF] h-full overflow-auto'>
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
                <BannerComponent />
                <div className='flex flex-col gap-4'>
                    <ContentComponent />
                    <VideoComponent />
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage