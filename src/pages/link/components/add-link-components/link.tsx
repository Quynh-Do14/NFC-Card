import { useRef, useState } from 'react'
import { ButtonCommon } from '../../../../infrastructure/common/components/button/button-common'
import { Checkbox, Col, Radio, Row, Tooltip } from 'antd';
import InputArrayTextCommon from '../../../../infrastructure/common/components/input/array/input-array-common';
import SwitchArrayTextCommon from '../../../../infrastructure/common/components/input/array/switch-array-common';
import UploadArrayImage from '../../../../infrastructure/common/components/input/array/upload-array-image';
import Constants from '../../../../core/common/constants';
import imageType from "../../../../assets/images/type.jpg";

type Props = {
    listLink: Array<any>,
    setListLink: Function,
    onAddURL: Function,
    onAddTitle: Function,
    listEditAvailable: Array<any>,
    setListEditAvailable: Function,
    onEditTitle: Function,
    onDeleteElement: Function,
    idSelectOption: number,
    setIdSelectOption: Function,
    onReState: Function,
}
const LinkComponents = (props: Props) => {
    const {
        listLink,
        setListLink,
        onAddURL,
        onAddTitle,
        listEditAvailable,
        onEditTitle,
        onDeleteElement,
        idSelectOption,
        setIdSelectOption,
        onReState
    } = props;
    const [valueLayout, setValueLayout] = useState<number>(1)
    const dragItem = useRef<any>();
    const dragOverItem = useRef<any>();

    const handleDragStart = (e: any, index: number) => {
        dragItem.current = index;
    };

    const handleDragEnter = (e: any, index: number) => {
        dragOverItem.current = index;
        const listCopy = [...listLink];
        const dragItemContent = listCopy[dragItem.current];
        listCopy.splice(dragItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setListLink(listCopy);
    };

    const handleDragEnd = () => {
        dragItem.current = null;
        dragOverItem.current = null;
    };

    const onCancelOption = () => {
        setIdSelectOption(null)
    };

    const onOpenExpand = (id: number) => {
        setIdSelectOption(id)
        if (id == idSelectOption) {
            setIdSelectOption(null)
        }
    };

    const onChangLayout = (index: number, idLayout: number) => {
        setListLink((prev: Array<any>) => {
            prev[index] = {
                ...prev[index],
                ["layout"]: idLayout,
            }
            return prev;
        });
        setValueLayout(idLayout);
        onReState();
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-between'>
                <ButtonCommon
                    classColor={'blue'}
                    onClick={onAddURL}
                    title={'Thêm liên kết'}
                    icon={<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#FFFFFF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#FFFFFF" />
                    </svg>}
                />

                <ButtonCommon
                    classColor={'blue'}
                    onClick={onAddTitle}
                    title={'Thêm tiêu đề'}
                    icon={<svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z" /><path d="M14 6h2v2h-2zm3 0h2v2h-2z" /></svg>}
                />
            </div>
            {
                listLink && listLink.length && listLink.map((it, index) => {
                    const conditionIdSelect = idSelectOption == it.id

                    return (
                        <Row
                            key={index}
                            gutter={[20, 20]}
                            align={"middle"}
                            className='border-[1px] border-[#ffffff] bg-[#FFF] rounded-[20px] px-4 py-6 relative'
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragEnd={handleDragEnd}
                        >
                            <Col
                                xs={4} sm={2} lg={3} xl={2} className='cursor-grab'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3V21M12 3L9 6M12 3L15 6M12 21L15 18M12 21L9 18M3 12H21M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15" stroke="#2525259e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Col>
                            {/* <Col sm={19} lg={16} xl={19} className={`${it.isURL ? "justify-center" : "justify-center"} flex`}> */}
                            <Col xs={14} sm={19} lg={16} xl={19} className="justify-center flex">
                                {
                                    listEditAvailable.includes(index)
                                        ?
                                        <div
                                            className='flex items-center gap-4 cursor-pointer'
                                        >
                                            <div className={`flex flex-col gap-2`}>
                                                <InputArrayTextCommon
                                                    label={'Tiêu đề'}
                                                    attribute={'title'}
                                                    isRequired={false}
                                                    data={listLink}
                                                    setData={setListLink}
                                                    disabled={false}
                                                    index={index}
                                                    maxLength={it.isURL ? undefined : 30}
                                                    handlePressEnter={() => onEditTitle(index)}
                                                />
                                                {
                                                    it.isURL
                                                    &&
                                                    <InputArrayTextCommon
                                                        label={'Liên kết'}
                                                        attribute={'content'}
                                                        isRequired={false}
                                                        data={listLink}
                                                        setData={setListLink}
                                                        disabled={false}
                                                        index={index}
                                                        handlePressEnter={() => onEditTitle(index)}
                                                    />
                                                }
                                            </div>
                                            <div
                                                className='flex items-center gap-2 cursor-pointer'
                                                onClick={() => onEditTitle(index)}
                                            >
                                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F" />
                                                </svg>
                                            </div>
                                        </div>
                                        :
                                        <div
                                            className='flex items-center gap-4 cursor-pointer'
                                            onClick={() => onEditTitle(index)}
                                        >
                                            <div className='flex flex-col gap-4'>
                                                <div className='text-[14px] text-[#1e2330] font-medium text-truncate break-all'>{it.title ? it.title : "Thêm tiêu đề"}</div>
                                                {
                                                    it.isURL
                                                    &&
                                                    <div className='text-[14px] text-[#1e2330] font-medium text-truncate break-all'>{it.content ? it.content : "Thêm liên kết"}</div>
                                                }
                                            </div>
                                            <div className='w-5 h-auto'>
                                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F" />
                                                </svg>
                                            </div>
                                        </div>
                                }
                            </Col>

                            <Col xs={6} sm={3} lg={5} xl={3} className='flex flex-col items-center gap-4'>
                                <SwitchArrayTextCommon
                                    attribute={'isShow'}
                                    data={listLink}
                                    setData={setListLink}
                                    dataAttribute={""}
                                    index={index}
                                    onReState={onReState}
                                />
                                <Tooltip title={`${conditionIdSelect ? "Đóng" : "Xem thêm"}`} placement='bottomRight'>
                                    <div
                                        onClick={() => onOpenExpand(it.id)}
                                        className={`${conditionIdSelect ? "open" : "close"} expand-icon cursor-pointer`}
                                    >
                                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#0F0F0F" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.6806 13.9783L15.4706 10.7683L13.5106 8.79828C12.6806 7.96828 11.3306 7.96828 10.5006 8.79828L5.32056 13.9783C4.64056 14.6583 5.13056 15.8183 6.08056 15.8183H11.6906H17.9206C18.8806 15.8183 19.3606 14.6583 18.6806 13.9783Z" fill="#2525259e" />
                                        </svg>
                                    </div>
                                </Tooltip>
                            </Col>

                            <Col span={24} className='relative'>
                                <div className={`${conditionIdSelect ? "show" : "un-show"} show-more-option flex flex-col gap-3 border-t-[16px] border-[#e0e2d9] pt-6`}>
                                    {
                                        it.isURL && it.thumbnailURL &&
                                        <div className='flex flex-col gap-3'>
                                            {
                                                Constants.ConfigLayout.List.map((item, indexX) => {
                                                    return (
                                                        <Row
                                                            onClick={() => onChangLayout(index, item.id)}
                                                            key={indexX}
                                                            align={"middle"}
                                                            className={`${valueLayout == item.id ? "border-[2px]" : "border-[1px]"} cursor-pointer rounded-[20px] border-[1px] border-[#346164] px-3 py-2`}>
                                                            <Col span={2}>
                                                                <Radio checked={valueLayout == item.id ? true : false} />
                                                            </Col>
                                                            <Col span={13}>
                                                                <div className='text-[15px] font-semibold'>
                                                                    {item.name}
                                                                </div>
                                                                <div className='text-[15px]'>
                                                                    {item.content}
                                                                </div>
                                                            </Col>
                                                            <Col span={9}>
                                                                {
                                                                    item.id == 1
                                                                        ?
                                                                        <div key={index} className='rounded-[20px] p-2 px-3 flex items-center bg-[#346164] gap-4'>
                                                                            <img src={imageType} alt="" className='rounded-[50%] h-[32px] w-[32px]' />
                                                                        </div>
                                                                        :
                                                                        <div key={index} className='rounded-[20px] flex items-center bg-[#346164] gap-4'>
                                                                            <img src={imageType} alt="" className='rounded-[20px] w-full h-[10vh] object-cover' />
                                                                        </div>
                                                                }

                                                            </Col>
                                                        </Row>
                                                    )
                                                })
                                            }
                                        </div>
                                    }

                                    <div className={`${it.isURL ? "justify-between" : "justify-end"} flex flex-row max-sm:flex-col md:flex-row lg:flex-col xl:flex-row  gap-3 items-center`}>
                                        {it.isURL &&
                                            <UploadArrayImage
                                                label={'Ảnh đại diện'}
                                                dataAttribute={""}
                                                data={listLink}
                                                setData={setListLink}
                                                attribute={'thumbnailURL'}
                                                index={index}
                                                onReState={onReState}
                                            />
                                        }
                                        <div className='flex gap-2 justify-end'>
                                            <ButtonCommon
                                                classColor={'grey'}
                                                onClick={() => onDeleteElement(it.id)}
                                                title={'Xóa'}
                                                icon={<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#282828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            />
                                            <ButtonCommon
                                                classColor={'blue'}
                                                onClick={onCancelOption}
                                                title={'Hủy'}
                                                icon={<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="#FFFFFF" stroke-width="2" />
                                                    <path d="M18 18L6 6" stroke="#FFFFFF" stroke-width="2" />
                                                </svg>}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
        </div >
    )
}

export default LinkComponents