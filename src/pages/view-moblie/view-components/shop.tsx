import React, { useState } from 'react'
import { ButtonCommon } from '../../../infrastructure/common/components/button/button-common'
import { Col, Row, Switch, Tooltip } from 'antd'
import ModalCommon from '../../../infrastructure/common/components/modal/modalCommon'
import Constants from '../../../core/common/constants'

const dataFake = [
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVA",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVB",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVA",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVB",
        isShow: true
    },
    {
        img: "https://studiovietnam.com/wp-content/uploads/2020/10/chup-anh-cac-san-pham-cong-nghe-01.jpg",
        name: "Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC Sản phẩm của NVC",
        isShow: true
    },
]
type Props = {
    dataProfile: any,
    buttonType: any
}
const ShopViewComponent = (props: Props) => {
    const {
        dataProfile,
        buttonType
    } = props;
    const colorTextBtn = dataProfile?.colorTextBtn
    const bgBtn = dataProfile?.bgBtn

    return (
        <div className='flex flex-col gap-6'>
            <Row gutter={[15, 15]}>
                {
                    dataFake.map((it, index) => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={24} xl={12} key={index} className='shop-view-product-container'>
                                <div className='flex flex-col gap-3 h-full rounded-[16px] p-1 shadow-md cursor-pointer'
                                    style={{
                                        background: buttonType.type == Constants.ConfigStyleButton.Outline.value ? "#FFF" : bgBtn
                                    }}
                                >
                                    <img src={it.img} alt="" className='rounded-t-[16px]' />
                                    <div className='flex flex-col items-center justify-center h-full gap-4 pt-2 pb-6 px-1'>
                                        <Tooltip title={it.name}>
                                            <div className='text-truncate text-[13px] font-semibold'
                                                style={{
                                                    color: colorTextBtn
                                                }}
                                            >
                                                {it.name}
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ShopViewComponent