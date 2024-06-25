import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "../../../../assets/styles/components/input.css"
type Props = {
    label?: string,
    placeholder: string,
    value: string
    onChange: any,
    disabled: boolean,
    handlePressEnter?: () => void,
}
export const InputCommon = (props: Props) => {
    const {
        label,
        placeholder,
        value,
        onChange,
        disabled,
        handlePressEnter
    } = props;
    return (
        <div className='input-common'>
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
                placeholder={placeholder}
                maxLength={36}
                onPressEnter={handlePressEnter}
                onBlur={handlePressEnter}
            />
        </div>
    )
}
