import React, { useEffect, useState } from 'react'
import Constants from '../../core/common/constants'
import { Col, QRCode, Row } from 'antd'
import UploadFileCommon from '../../infrastructure/common/components/input/upload-file';
import { InputCommon } from '../../infrastructure/common/components/input/input-text-common';
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout';
import UploadBackgroundImage from '../../infrastructure/common/components/input/upload-bg-image';
import CardComponent from './components/card';
import InfoComponent from './components/info';
import ListImageBGComponent from './components/list-img-bg';

const HomePage = () => {
    const [listImg, setListImg] = useState<Array<any>>(Constants.ImageCard.List);
    const [changeImage, setChangeImg] = useState<string>(listImg[0]?.value);
    const [file, setFile] = useState<any>();
    const [fileUrl, setFileUrl] = useState<string>("");
    const [urlLink, setUrlLink] = useState<string>("");
    const [infoCard, setInfoCard] = useState<string>("");
    const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
    const [widthPadding, setWidthPadding] = useState<number>(0)
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
    }, [widthScreen]);

    const onChangeImg = (img: string) => {
        setChangeImg(img);
    }
    useEffect(() => {
        setChangeImg(listImg[0]?.value);
    }, [listImg]);

    const onChangUrlLink = (e: any) => {
        setUrlLink(e.target.value)
    }

    const onChangInfoCard = (e: any) => {
        setInfoCard(e.target.value)
    }

    return (
        <MainLayout>
            <div className='bg-[#FFFFFF] h-full rounded-[16px] flex flex-col gap-6 overflow-auto p-4 md:px-16 md:py-4 lg:py-4 lg:px-12'>
                <CardComponent
                    changeImage={changeImage}
                    widthScreen={widthScreen}
                    widthPadding={widthPadding}
                    fileUrl={fileUrl}
                    infoCard={infoCard}
                    urlLink={urlLink}
                />
                <ListImageBGComponent
                    listImg={listImg}
                    setChangeImg={setChangeImg}
                    setListImg={setListImg}
                    onChangeImg={onChangeImg}
                />
                <InfoComponent
                    urlLink={urlLink}
                    onChangUrlLink={onChangUrlLink}
                    infoCard={infoCard}
                    onChangInfoCard={onChangInfoCard}
                    setFile={setFile}
                    setFileUrl={setFileUrl}
                />
            </div >
        </MainLayout >
    )
}

export default HomePage