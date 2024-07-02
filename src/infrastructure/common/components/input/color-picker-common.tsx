import React, { useEffect, useState } from 'react'
import { MessageError } from '../controls/MessageError';
import { ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

type Props = {
    label: string,
    attribute: string,
    setData: Function,
    dataAttribute: any,
    disabled: boolean,
}
type Color = GetProp<ColorPickerProps, 'value'>;

const ColorPickerCommon = (props: Props) => {
    const {
        label,
        attribute,
        setData,
        dataAttribute,
    } = props;
    const [value, setValue] = useState<Color>("");

    const onChange = (value: any, hex: string) => {
        setValue(value || "");
        if (attribute == "backgroundColor") {
            setData({
                [attribute]: hex || '',
                ["backgroundImage"]: ""
            });
        }
        else {
            setData({
                [attribute]: hex || '',
            });
        }
    };

    useEffect(() => {
        setValue(dataAttribute || '');

    }, [dataAttribute]);

    const hexString = React.useMemo<string>(
        () => (typeof value === 'string' ? value : value?.toHexString()),
        [value],
    );

    return (
        <div>
            <div className={`mb-4 input-common-picker`}>
                <div className='title mb-2'>
                    <span>
                        <span className='label'>{label}</span>
                    </span>
                </div>
                <div className='flex gap-3 items-center h-full'>
                    <ColorPicker
                        value={value}
                        size="large"
                        onChange={onChange}
                    />
                    <div className='text-[16px] font-semibold'>
                        {hexString}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ColorPickerCommon