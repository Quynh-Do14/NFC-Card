import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "../../../../assets/styles/components/input.css"
import { useState } from 'react';
type Props = {
    label?: string,
    value: string
    onChange: any,
    disabled: boolean,
    handlePressEnter?: () => void,
}
export const InputCommon = (props: Props) => {
    const {
        label,
        value,
        onChange,
        disabled,
        handlePressEnter
    } = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const onBlur = () => {
        if (value) {
            setIsFocused(true);
        }
        else {
            setIsFocused(false);
        }

    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className={`mb-4 input-common ${isFocused ? 'focused' : ''}`}>
            {
                label
                &&
                <div className='title mb-2'>
                    <span>
                        <span className='label'>{label}</span>
                    </span>
                </div>
            }

            <Input
                className=''
                size={"middle"}
                value={value ? value : ""}
                onChange={onChange}
                disabled={disabled}
                maxLength={36}
                onBlur={onBlur}
                onFocus={handleFocus}
                onPressEnter={handlePressEnter}
            />
        </div>
    )
}
