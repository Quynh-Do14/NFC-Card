import React, { useState } from 'react'
import UploadBackgroundImage from '../../../infrastructure/common/components/input/upload-bg-image'
import { Col, Row } from 'antd'
type Props = {
    listImg: Array<any>,
    setListImg: Function,
    dataCard: any
    setDataCard: Function,

}
const ListImageBGComponent = (props: Props) => {
    const {
        listImg,
        setListImg,
        dataCard,
        setDataCard,
    } = props;

    const onChange = (it: any) => {
        setDataCard({
            ["backgroundImageId"]: it.label || '',
            ["backgroundImage"]: it.value || '',
            ["backgroundColor"]: ''
        });
    };

    return (
        <div className='bg-[#ffffff] shadow-md border-[1px] border-[#f2f2f0] rounded-[12px] p-6 flex flex-col gap-4'>
            <div className="text-[18px] text-[#1e2330] font-semibold">Chọn ảnh nền</div>
            <div className='p-4'>
                <Row gutter={[10, 10]}>
                    <Col span={24} className='p-1'>
                        <UploadBackgroundImage
                            setDataCard={setDataCard}
                            listImg={listImg}
                            setListImg={setListImg}
                        />
                    </Col>
                    {listImg.map((it, index) => {
                        return (
                            <Col xs={12} sm={12} lg={12} xl={8} xxl={6} key={index}>
                                <div className={`${dataCard.backgroundImageId == it.label ? "bg-[#cbe5fe]" : ""} p-1 rounded-[8px]`}>
                                    < div
                                        onClick={() => onChange(it)}
                                        className='border-[1px] rounded-[8px] border-[#d3d3d3] cursor-pointer flex justify-center items-center overflow-hidden w-full h-full'
                                    >
                                        <img src={it.value} alt="" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row >
            </div>
        </div>
    )
}

export default ListImageBGComponent