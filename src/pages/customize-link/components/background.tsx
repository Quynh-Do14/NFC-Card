import ColorPickerCommon from '../../../infrastructure/common/components/input/color-picker-common'
type Props = {
    data: any
    setData: Function,
}
const BackgroundComponent = (props: Props) => {
    const {
        data,
        setData,
    } = props;

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <div className="text-[18px] text-[#1e2330] font-semibold">Màu sắc nền</div>
            <ColorPickerCommon
                label={'Màu nền'}
                attribute={"bg"}
                setData={setData}
                dataAttribute={data.bg}
                disabled={false}
            />

        </div>
    )
}

export default BackgroundComponent