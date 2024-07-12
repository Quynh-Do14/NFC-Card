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