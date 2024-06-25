import React, { useEffect, useState } from 'react'
import Constants from '../../core/common/constants'
import { Col, QRCode, Row } from 'antd'
import UploadFileCommon from '../../infrastructure/common/components/input/upload-file';
import { InputCommon } from '../../infrastructure/common/components/input/input-text-common';
import MainLayout from '../../infrastructure/common/Layouts/Main-Layout';

const HomePage = () => {
    const [listImg, setListImg] = useState<Array<any>>(Constants.ImageCard.List);
    const [changeImage, setChangeImg] = useState<string>(listImg[0]?.value);
    const [file, setFile] = useState<any>();
    const [fileUrl, setFileUrl] = useState<string>("");
    const [urlLink, setUrlLink] = useState<string>("");
    const [infoCard, setInfoCard] = useState<string>("");

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
            <div className='flex flex-col gap-4 overflow-auto p-4'>
                {/* <div className='flex'>
                    <div className='relative'>
                        <div className=''>
                            <img src={changeImage} alt="" className='border-[1px] border-[#d3d3d3] object-cover' />
                        </div>
                        <div className='absolute top-5 flex justify-between items-start w-full px-5'>
                            <div className='flex justify-center items-center overflow-hidden'>
                                <img src={fileUrl} alt="" className=' object-cover' />
                            </div>
                            <QRCode
                                value={urlLink || 'http://localhost:3000/'}
                                bgColor='#FFF'
                            />
                        </div>

                    </div>
                </div> */}
                <div className="card-container w-full">
                    <div className="card"
                        style={{
                            backgroundImage: `url(${changeImage})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="card-header">
                            <img src={fileUrl} alt="" className=' object-cover' />
                            <QRCode
                                value={urlLink || 'http://localhost:3000/'}
                                bgColor='#FFF'
                            />
                        </div>
                        <div className="card-body">
                            <div className="text-[20px] font-semibold ">{infoCard}</div>
                        </div>
                    </div>
                </div>

                <Row gutter={[10, 10]}>
                    {listImg.map((it, index) => {
                        return (
                            <Col xs={12} sm={8} lg={6} xl={4} key={index}>
                                <div
                                    onClick={() => onChangeImg(it.value)}
                                    className='border-[1px] border-[#d3d3d3] cursor-pointer flex justify-center items-center overflow-hidden w-full h-full '
                                >
                                    <img src={it.value} alt="" className='w-full h-full object-cover' />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <InputCommon
                    label={"Đường dẫn của bạn"}
                    placeholder={'Nhập đường dẫn của bạn"'}
                    value={urlLink}
                    onChange={onChangUrlLink}
                    disabled={false}
                />
                <InputCommon
                    label={"Thông tin thẻ"}
                    placeholder={'Nhập thông tin thẻ'}
                    value={infoCard}
                    onChange={onChangInfoCard}
                    disabled={false}
                />
                <UploadFileCommon
                    label={"Thêm hình nền"}
                    setFile={() => { }}
                    setFileUrl={() => { }}
                    setChangeImg={setChangeImg}
                    listImg={listImg}
                    setListImg={setListImg}
                />
                <UploadFileCommon
                    label={"Thêm logo"}
                    setFile={setFile}
                    setFileUrl={setFileUrl}
                    setChangeImg={() => { }}
                    listImg={[]}
                    setListImg={() => { }}
                />
            </div >
        </MainLayout >
    )
}

export default HomePage