import React from 'react'
import UploadBackgroundImage from '../../../infrastructure/common/components/input/upload-bg-image'
import { Col, Row } from 'antd'
type Props = {
    listImg: Array<any>,
    setChangeImg: Function,
    setListImg: Function,
    onChangeImg: Function,
}
const ListImageBGComponent = (props: Props) => {
    const {
        listImg,
        setChangeImg,
        setListImg,
        onChangeImg,
    } = props
    return (
        <Row gutter={[10, 10]}>
            <Col xs={12} sm={8} lg={6} xl={4}>
                <UploadBackgroundImage
                    setFile={() => { }}
                    setFileUrl={() => { }}
                    setChangeImg={setChangeImg}
                    listImg={listImg}
                    setListImg={setListImg}
                    attributeImg={null}
                />
            </Col>
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
    )
}

export default ListImageBGComponent