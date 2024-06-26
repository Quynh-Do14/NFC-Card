import React, { useState } from 'react'
import { ButtonCommon } from '../../../../infrastructure/common/components/button/button-common'
import { Col, Row, Switch, Tooltip } from 'antd'
import ModalCommon from '../../../../infrastructure/common/components/modal/modalCommon'

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
// type Props = {
//     data: any,
//     setData: Function,
//     validate: any,
//     setValidate: Function,
//     submittedTime: any,
// }
const ShopViewComponent = (props: any) => {
    const {
        data,
        setData,
        validate,
        setValidate,
        submittedTime
    } = props;

    return (
        <div className='flex flex-col gap-6'>
            <Row gutter={[15, 15]}>
                {
                    dataFake.map((it, index) => {
                        return (
                            <Col xs={12} sm={12} md={8} lg={12} key={index} className='shop-view-product-container'>
                                <div className='flex flex-col gap-3 h-full bg-[#FFF] rounded-[16px] p-1 shadow-md cursor-pointer'>
                                    <img src={it.img} alt="" className='rounded-t-[16px]' />
                                    <div className='flex flex-col items-center justify-center h-full gap-4 py-6 px-3'>
                                        <div className='text-truncate text-[15px] font-semibold'>
                                            {it.name}
                                        </div>
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