import { Col, Row } from 'antd';
import LinkComponents from './add-link-components/link';
import Constants from '../../../core/common/constants';
import ShopComponent from './add-link-components/shop';
import { useState } from 'react';
type Props = {
    selectIndex: number,
    setSelectIndex: Function,
    listLink: Array<any>,
    setListLink: Function,
    onAddURL: Function,
    onAddTitle: Function,
    listEditAvailable: Array<any>,
    setListEditAvailable: Function,
    onEditTitle: Function,
    onDeleteElement: Function,
    onReState: Function
}
const AddLink = (props: Props) => {
    const {
        selectIndex,
        setSelectIndex,
        listLink,
        setListLink,
        onAddURL,
        onAddTitle,
        listEditAvailable,
        setListEditAvailable,
        onEditTitle,
        onDeleteElement,
        onReState
    } = props;
    const [validate, setValidate] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [idSelectOption, setIdSelectOption] = useState<number>(-1);
    const [submittedTime, setSubmittedTime] = useState<any>();
    const [_dataShop, _setDataShop] = useState<any>({});
    const dataShop = _dataShop;

    const setDataShop = (data: any) => {
        Object.assign(dataShop, { ...data });
        _setDataShop({ ...dataShop })
    }

    const isValidData = () => {
        let allRequestOK = true;

        setValidate({ ...validate });

        Object.values(validate).forEach((it: any) => {
            if (it.isError === true) {
                allRequestOK = false;
            }
        });
        return allRequestOK;
    };

    return (
        <div className='add-link-container border-r-[1px] border-r-[#ffffff] flex flex-col gap-6 px-2 relative'>
            <Row gutter={[0, 15]} className='bg-[#FFFFFF] shadow-sm rounded-[16px] px-4 py-6'>
                <Col xs={24} sm={24} md={14} className='flex items-center gap-1'>
                    <div className='text-[15px] font-semibold'>
                        Liên kết của bạn:
                    </div>
                    <div className='text-[15px] font-normal underline cursor-pointer'>
                        techid:QuynhDo
                    </div>
                </Col>
                <Col xs={24} sm={24} md={10} className='flex sm:justify-start md:justify-end'>
                    <div className='bg-[#eaedf2] rounded-[20px] shadow-md flex items-center gap-1 p-3 cursor-pointer'>
                        <div className='text-[15px] font-semibold'>
                            Sao chép liên kết
                        </div>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="#0F0F0F" />
                            <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="#0F0F0F" />
                        </svg>
                    </div>
                </Col>
            </Row>
            <div className='flex flex-col gap-6 padding-link'>
                <div>
                    <div className='flex'>
                        <div className='flex border-2 border-[#ffffff] bg-[#FFF] rounded-[20px]'>
                            {
                                Constants.TabSelect.List.map((it, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${selectIndex == it.value ? "active" : "un-active"} tab px-6 py-3 w-[130px] text-center rounded-[20px] cursor-pointer`}
                                            onClick={() => setSelectIndex(it.value)}
                                        >
                                            <div className='text-[14px] font-semibold'>{it.label} </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div className={`tab-pane ${selectIndex == 1 ? "activate" : "inactivate"}`}>
                        <LinkComponents
                            listLink={listLink}
                            setListLink={setListLink}
                            onAddURL={onAddURL}
                            onAddTitle={onAddTitle}
                            listEditAvailable={listEditAvailable}
                            setListEditAvailable={setListEditAvailable}
                            onEditTitle={onEditTitle}
                            onDeleteElement={onDeleteElement}
                            idSelectOption={idSelectOption}
                            setIdSelectOption={setIdSelectOption}
                            onReState={onReState}
                        />
                    </div>
                    <div className={`tab-pane ${selectIndex == 2 ? "activate" : "inactivate"}`}>
                        <ShopComponent
                            data={dataShop}
                            setData={setDataShop}
                            validate={validate}
                            setValidate={setValidate}
                            submittedTime={submittedTime}
                        />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default AddLink