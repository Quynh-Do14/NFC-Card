import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import "../../../../../assets/styles/components/input.css"
type Props = {
    attribute: string,
    setData: Function,
    dataAttribute: any,
    index: number,
    data: Array<any>,
}
const SwitchArrayTextCommon = (props: Props) => {
    const {
        attribute,
        data,
        setData,
        index,
    } = props;
    const [value, setValue] = useState<boolean>(false);
    const [disabled, setDisable] = useState<boolean>(false);

    const onChangeCheckWithCondition = (check: boolean) => {
        setData((prev: Array<any>) => {
            prev[index] = {
                ...prev[index],
                [attribute]: check,
            }
            return prev;
        });
    }

    const onChange = (check: boolean) => {
        onChangeCheckWithCondition(check)
        setValue(check);
    };

    useEffect(() => {
        if (data[index].isURL) {
            if (data[index].title == null || data[index].content == null) {
                setDisable(true);
                setValue(false);
                onChangeCheckWithCondition(false);
            }
            else if (data[index].title != null && data[index].content != null) {
                setDisable(false);
                setValue(true);
                onChangeCheckWithCondition(true);
            }
        }
        else {
            if (data[index].title == null) {
                setDisable(true);
                setValue(false);
                onChangeCheckWithCondition(false);
            }
            else {
                setDisable(false);
                setValue(true);
                onChangeCheckWithCondition(true);
            }
        }

    }, [data[index]]);

    useEffect(() => {
        if (data[index]) {
            setValue(data[index][attribute]);
        }
    }, [index, data, attribute]);

    return (
        <div>
            <div className='input-array-custom-common'>
                <div>
                    <Switch
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                    />

                </div>
            </div>
        </div>
    )
};
export default SwitchArrayTextCommon;