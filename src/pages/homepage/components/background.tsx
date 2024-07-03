import ColorPickerCommon from '../../../infrastructure/common/components/input/color-picker-common'
type Props = {
    dataCard: any
    setDataCard: Function,
}
const BackgroundComponent = (props: Props) => {
    const {
        dataCard,
        setDataCard,
    } = props;

    return (
        <div className='flex flex-col gap-4 border-[1px] border-[#f2f2f0] bg-[#FFF] rounded-[12px] p-6'>
            <div className="text-[18px] text-[#1e2330] font-semibold">Màu sắc nền</div>
            <ColorPickerCommon
                label={'Màu nền'}
                attribute={"backgroundColor"}
                setData={setDataCard}
                dataAttribute={dataCard.backgroundColor}
                disabled={false}
            />
            <ColorPickerCommon
                label={'Màu nền mã QR'}
                attribute={"backgroundColorQRCode"}
                setData={setDataCard}
                dataAttribute={dataCard.backgroundColorQRCode}
                disabled={false}
            />
            <ColorPickerCommon
                label={'Màu chữ'}
                attribute={"textColor"}
                setData={setDataCard}
                dataAttribute={dataCard.textColor}
                disabled={false}
            />
        </div>
    )
}

export default BackgroundComponent