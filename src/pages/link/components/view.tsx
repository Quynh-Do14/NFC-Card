import React, { useEffect, useState } from 'react'
import Constants from '../../../core/common/constants';
type Props = {
    selectIndex: number,
    setSelectIndex: Function,
    listLink: Array<any>,
    listEditAvailable: Array<any>,
    isPreview: boolean,

}
const ViewMobile = (props: Props) => {
    const {
        selectIndex,
        setSelectIndex,
        listLink,
        listEditAvailable,
        isPreview
    } = props;
    const [listLinkView, setListLinkView] = useState<Array<any>>([]);

    useEffect(() => {
        setListLinkView(listLink)
    }, [listLink, listEditAvailable]);
    console.log("listLink", listLink);
    console.log("listEditAvailable", listEditAvailable);

    return (
        <div className='mobile-screen flex justify-center items-center'>
            <div className={`${isPreview ? "up" : "down"} mobile-screen-container  border-4 border-[#FFF] overflow-auto shadow-xl bg-[#eecbbf] flex flex-col items-center gap-6 p-4`} >
                <div className='text-[14px] font-semibold text-center'>
                    @QuynhDo
                </div>
                <div className='flex'>
                    <div className='flex border-2 border-[#ffffff] bg-[#FFF] rounded-[20px]'>
                        {
                            Constants.TabSelect.List.map((it, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${selectIndex == it.value ? "active" : "un-active"} px-6 py-3 w-[140px] text-center rounded-[20px] cursor-pointer`}
                                        onClick={() => setSelectIndex(it.value)}
                                    >
                                        <div className='text-[14px] font-semibold'>{it.label} </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center w-full'>
                    {
                        listLinkView.map((it, index) => {
                            if (it.isShow) {
                                if (it.isURL) {
                                    return (
                                        <div key={index} className='bg-[#FFF] rounded-[24px] px-6 py-4 w-full '>
                                            <div className='text-[13px] text-[#1e2330] font-medium text-center'>
                                                {it.title}
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index}>
                                            <div className='text-[14px] text-[#1e2330] text font-semibold'>
                                                {it.title}
                                            </div>
                                        </div>
                                    )
                                }

                            }
                            return
                        })
                    }
                </div>

            </div >
        </div>


    )
}

export default ViewMobile