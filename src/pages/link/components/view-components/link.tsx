import React from 'react'
type Props = {
    listLinkView: Array<any>,
}
const LinkViewComponent = (props: Props) => {
    const { listLinkView } = props
    return (
        <div className='flex flex-col gap-6 items-center w-full'>
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
    )
}

export default LinkViewComponent