import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import "../../../../../assets/styles/components/input.css"
import { validateFields } from '../../../../helper/helper';
import { MessageError } from '../../controls/MessageError';
type Props = {
    label: string,
    attribute: string,
    isRequired: boolean,
    setData: Function,
    disabled: boolean,
    index: number,
    data: Array<any>,
    maxLength?: number,
    handlePressEnter?: () => void,

}
const InputArrayTextCommon = (props: Props) => {
    const {
        label,
        attribute,
        isRequired,
        data,
        setData,
        disabled = false,
        index,
        maxLength,
        handlePressEnter
    } = props;
    const [value, setValue] = useState("");

    const onChange = (e: any) => {
        setData((prev: Array<any>) => {
            prev[index] = {
                ...prev[index],
                [attribute]: e.target.value || null,
            }
            return prev;
        });
        setValue(e.target.value || null);
    };

    let labelLower = label.toLowerCase();

    useEffect(() => {
        if (data[index]) {
            setValue(data[index][attribute]);
        }
    }, [index, data, attribute]);

    return (
        <div>
            <div className='input-array-custom-common flex flex-col gap-2'>
                <Input
                    size={"middle"}
                    value={value ? value : ""}
                    onChange={onChange}
                    onBlur={handlePressEnter}
                    disabled={disabled}
                    placeholder={`Thêm ${labelLower}`}
                    onPressEnter={handlePressEnter}
                    maxLength={maxLength ? maxLength : undefined}
                    // className={`${validate[`${attribute}${index}`]?.isError ? "input-error" : ""} w-full`}
                    className='custom-input w-full'
                />
                {
                    maxLength
                    &&
                    <div className='text-[14px] font-semibold px-2.5'>{value && value.length ? value.length : 0}  / {maxLength}</div>
                }
            </div>
        </div>
    )
};
export default InputArrayTextCommon;