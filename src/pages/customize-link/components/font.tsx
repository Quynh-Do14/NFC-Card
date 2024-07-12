import ColorPickerCommon from '../../../infrastructure/common/components/input/color-picker-common'
type Props = {
    data: any
    setData: Function,
}
const FontComponent = (props: Props) => {
    const {
        data,
        setData,
    } = props;

    return (
        <div className='flex flex-col gap-4 border-2 border-[#ffffff] bg-[#FFF] rounded-[12px] p-6'>
            <h2 className="text-[18px] text-[#1e2330] font-semibold">Màu chữ</h2>
            <ColorPickerCommon
                label={'Màu chữ'}
                attribute={"fontColor"}
                setData={setData}
                dataAttribute={data.fontColor}
                disabled={false}
            />

        </div>
    )
}

export default FontComponent