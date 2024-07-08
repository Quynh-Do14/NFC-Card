import avatar from "../../../assets/images/avatar.png"

type Props = {

}

const InfoProfileComponent = (props: Props) => {
    const {


    } = props;

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <div className='flex flex-col gap-4'>
                <div className='px-2.5 profile'>
                    <div className='flex items-center gap-4 cursor-pointer'>
                        <img src={avatar} alt="" width={60} height={60} />
                        <div className="flex flex-col gap-1 items-start">
                            <div className='text-[16px] text-[#6b7280] font-semibold text-truncate'>
                                @Qiunf
                            </div>
                            <div className='text-[14px] text-[#6b7280] font-normal underline text-truncate'>
                                techid:QuynhDo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProfileComponent