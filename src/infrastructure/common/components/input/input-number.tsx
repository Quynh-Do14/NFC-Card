import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import "../../../../assets/styles/components/input.css"
import { validateFields } from '../../../helper/helper';
import { validateCMND, validateEmail, validatePhoneNumber } from '../../../helper/validate';
import { MessageError } from '../controls/MessageError';
type Props = {
    label: string,
    attribute: string,
    isRequired: boolean,
    setData: Function,
    dataAttribute: any,
    disabled: boolean,
    validate: any,
    setValidate: Function,
    submittedTime: any,
}
const InputNumberCommon = (props: Props) => {
    const {
        label,
        attribute,
        setData,
        submittedTime,
        validate,
        setValidate,
        isRequired,
        dataAttribute,
        disabled = false,
    } = props;
    const [value, setValue] = useState<number>(0);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onChange = (val: any) => {
        setValue(val || null);
        setData({
            [attribute]: val || null
        });
    }
    let labelLower = label.toLowerCase();
    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attribute, !value, setValidate, validate, !value ? `Vui lòng nhập ${labelLower}` : "");
        }
        if (value) {
            setIsFocused(true);
        }
        else {
            setIsFocused(false);
        }

    };

    useEffect(() => {
        setValue(dataAttribute || '');

    }, [dataAttribute]);

    useEffect(() => {

        if (submittedTime != null) {
            onBlur(true);
        }
    }, [submittedTime]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div>
            <div className={`mb-4 input-common ${isFocused ? 'focused' : ''}`}>
                <div className='title mb-2'>
                    <span>
                        <span className='label'>{label}</span>
                        <span className='ml-1 is-required'>{isRequired ? "*" : ""} </span>
                    </span>
                </div>
                <div>
                    <InputNumber
                        min={0}
                        className={`${validate[attribute]?.isError ? "input-error" : ""} w-full`}
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        onBlur={() => onBlur(false)}
                        onFocus={handleFocus}
                    />
                    <MessageError isError={validate[attribute]?.isError || false} message={validate[attribute]?.message || ""} />
                </div>
            </div>
        </div>

    )

}
export default InputNumberCommon;