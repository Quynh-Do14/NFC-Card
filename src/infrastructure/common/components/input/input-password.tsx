import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import "../../../../assets/styles/components/input.css"
import { MessageError } from '../controls/MessageError';
import { validateFields } from '../../../helper/helper';
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
    data?: any
}
const InputPasswordCommon = (props: Props) => {
    const {
        label,
        attribute,
        isRequired,
        setData,
        dataAttribute,
        disabled = false,
        validate,
        setValidate,
        submittedTime,
        data
    } = props;
    const [value, setValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onChange = (e: any) => {
        setValue(e.target.value || "");
        setData({
            [attribute]: e.target.value || ''
        });
    };
    let labelLower = label?.toLowerCase();
    const onBlur = (isImplicitChange = false) => {
        let checkValidate
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
                    <Input.Password
                        size={"middle"}
                        value={value ? value : ""}
                        onChange={onChange}
                        onBlur={() => onBlur(false)}
                        onFocus={handleFocus}
                        disabled={disabled}
                        className={`${validate[attribute]?.isError ? "input-error" : ""}`}
                    />
                    <MessageError isError={validate[attribute]?.isError || false} message={validate[attribute]?.message || ""} />
                </div>
            </div>
        </div>
    )
};
export default InputPasswordCommon;