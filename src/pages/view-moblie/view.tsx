import React, { useEffect, useRef, useState } from 'react'
import Constants from '../../core/common/constants';
import avatar from "../../assets/images/avatar.png"
import LinkViewComponent from './view-components/link';
import ShopViewComponent from './view-components/shop';
type Props = {
    selectIndex: number,
    setSelectIndex: Function,
    listLink: Array<any>,
    listEditAvailable: Array<any>,
    isPreview: boolean,
    dataProfile: any
    buttonType: any,
}
const ViewMobile = (props: Props) => {
    const {
        selectIndex,
        setSelectIndex,
        listLink,
        listEditAvailable,
        isPreview,
        dataProfile,
        buttonType
    } = props;
    const [listLinkView, setListLinkView] = useState<Array<any>>([]);

    useEffect(() => {
        if (listLink) {
            setListLinkView(listLink)
        }
    }, [listLink, listEditAvailable]);
    const setSelectTab = (value: number) => {
        setSelectIndex(value)
    }
    const backgroundColor = dataProfile.backgroundColor;
    const fontColor = dataProfile.fontColor

    return (
        <div className='mobile-screen flex justify-center items-center'>
            <div className={`${isPreview ? "up" : "down"} mobile-screen-container border-4 border-[#FFF] overflow-auto shadow-xl`}
                style={{
                    background: backgroundColor || "#FFF"
                }}
            >
                <div className='scroll-auto flex flex-col items-center gap-6 px-4 py-8'>
                    <div>
                        <img src={avatar} alt="" width={80} height={80} />
                    </div>
                    <div className='text-[14px] font-semibold text-center'
                        style={{
                            color: fontColor
                        }}
                    >
                        @QuynhDo
                    </div>
                    <div className='flex'>
                        <div className='flex border-2 border-[#ffffff] bg-[#FFF] rounded-[20px]'>
                            {
                                Constants.TabSelect.List.map((it, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${selectIndex == it.value ? "active" : "inactive"} tab px-6 py-3 w-[120px] text-center rounded-[20px] cursor-pointer`}
                                            onClick={() => setSelectTab(it.value)}
                                        >
                                            <div className='text-[13px] font-semibold'>{it.label} </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className={`tab-pane ${selectIndex == 1 ? "activate" : "inactivate"}`}>
                            <LinkViewComponent
                                listLinkView={listLinkView}
                                dataProfile={dataProfile}
                                buttonType={buttonType}
                            />
                        </div>
                        <div className={`tab-pane ${selectIndex == 2 ? "activate" : "inactivate"}`}>
                            <ShopViewComponent
                                dataProfile={dataProfile}
                                buttonType={buttonType}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewMobile