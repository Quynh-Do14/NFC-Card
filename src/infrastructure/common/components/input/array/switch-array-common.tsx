import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import "../../../../../assets/styles/components/input.css"
type Props = {
    attribute: string,
    setData: Function,
    dataAttribute: any,
    index: number,
    data: Array<any>,
    onReState?: any,
}
const SwitchArrayTextCommon = (props: Props) => {
    const {
        attribute,
        data,
        setData,
        index,
        onReState
    } = props;
    const [value, setValue] = useState<boolean>(false);
    const [disabled, setDisable] = useState<boolean>(false);

    const onChange = (check: boolean) => {
        setData((prev: Array<any>) => {
            prev[index] = {
                ...prev[index],
                [attribute]: check,
            }
            return prev;
        });
        setValue(check);
        onReState();
    };

    useEffect(() => {
        if (data[index].isURL) {
            if (data[index].title == null || data[index].content == null) {
                setDisable(true);
            }
            else if (data[index].title != null && data[index].content != null) {
                setDisable(false);
            }
        }
        else {
            if (data[index].title == null) {
                setDisable(true);
            }
            else {
                setDisable(false);
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