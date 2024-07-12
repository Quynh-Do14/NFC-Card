import { Col, Layout, Menu, Row, } from 'antd';
import { useEffect, useState } from 'react';
import "../../../assets/styles/page/MainLayout.css";
import { ROUTE_PATH } from '../../../core/common/appRouter';
import authService from '../../repositories/auth/service/auth.service';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DialogConfirmCommon from '../components/modal/dialogConfirm';
import Constants from '../../../core/common/constants';
import { ProfileState } from '../../../core/atoms/profile/profileState';
import { isTokenStoraged } from '../../utils/storage';
import avatar from "../../../assets/images/avatar.png"

const { Content, Sider } = Layout;

const MainLayout = ({ ...props }: any) => {
    const [isOpenModalLogout, setIsOpenModalLogout] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [dataProfile, setDataProfile] = useState<any>({});
    const [, setProfileState] = useRecoilState(ProfileState);

    const navigate = useNavigate();
    const location = useLocation();
    const token = isTokenStoraged();

    const openModalLogout = () => {
        setIsOpenModalLogout(true);
    };

    const closeModalLogout = () => {
        setIsOpenModalLogout(false);
    };

    const onLogOut = async () => {
        setIsOpenModalLogout(false);
        try {
            await authService.logout(
                setLoading
            ).then(() => {
                navigate(ROUTE_PATH.HOME_PAGE);
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
        }
    }

    const getProfileUser = async () => {
        if (token) {
            try {
                await authService.profile(
                    () => { }
                ).then((response) => {
                    if (response) {
                        setDataProfile(response)
                        setProfileState(
                            {
                                data: response,
                            }
                        )
                    }
                })
            } catch (error) {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        if (token) {
            getProfileUser().then(() => { });
        }
    }, [token]);

    return (
        <div className="main-layout">
            <div onClick={() => setCollapsed(!collapsed)} className={`${collapsed ? "open" : "close"} overlay`}></div>
            <Layout>
                <div className='header'>
                    <div onClick={() => setCollapsed(!collapsed)} className='cursor-pointer'>

                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z" fill="#346164" />
                            <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#346164" />
                            <path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="#346164" />
                        </svg>
                    </div>
                    {/* <Row justify={"center"}>
                        {Constants.Menu.List.map((item: any, index: number) => {
                            return (
                                <Col
                                    span={4}
                                    key={index}
                                    className={`flex flex-col items-center gap-2 cursor-pointer text-[15px] whitespace-nowrap text-[#1e293bb3] font-semibold capitalize px-6 pt-5 pb-2 ${location.pathname.includes(item.link) && "active"}`}
                                    onClick={() => navigate(item.link)}
                                >
                                    <div dangerouslySetInnerHTML={{ __html: item.icon2 }} />
                                    <div>{item.label}</div>
                                </Col>
                            )
                        })}
                        <Col
                            span={4}
                            className={`flex flex-col items-center gap-2 cursor-pointer text-[15px] whitespace-nowrap text-[#1e293bb3] font-semibold capitalize px-6 pt-5 pb-2 ${location.pathname.includes("profile") && "active"}`}
                            onClick={() => navigate(ROUTE_PATH.PROFILE)}
                        >
                            <img src={avatar} alt="" width={40} height={40} />
                        </Col>
                    </Row> */}
                </div>
                <Layout>
                    <Sider className={`${collapsed ? "open" : "close"} sider`} trigger={null}>
                        <Menu className='menu'>
                            {Constants.Menu.List.map((it, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${location.pathname.includes(it.link) ? "active" : ""} menu`}
                                    >
                                        <Menu.Item
                                            className={`${location.pathname.includes(it.link) ? "menu-title active" : "menu-title"}`}
                                            icon={<div dangerouslySetInnerHTML={{ __html: it.icon2 }} />}
                                        >
                                            <Link to={it.link}>
                                                {it.label}
                                            </Link>
                                        </Menu.Item>
                                    </div>
                                )
                            })}
                        </Menu>
                        <div className='px-2.5 profile'>
                            <Link to={ROUTE_PATH.PROFILE}>
                                <div className='border-[1px] bg-[#01a6ff] border-[#01a6ff] rounded-[26px] flex items-center gap-2 cursor-pointer'>
                                    <img src={avatar} alt="" width={50} height={50} />
                                    <div className='menu-title !text-[#FFFFFF] text-truncate'>
                                        @Qiunf
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Sider>
                    <Content className='bg-content flex flex-col lg:py-3 lg:pr-3 pr-0 pt-0'>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
            <DialogConfirmCommon
                message={"Bạn có muốn đăng xuất khỏi hệ thống"}
                titleCancel={"Bỏ qua"}
                titleOk={"Đăng xuất"}
                visible={isOpenModalLogout}
                handleCancel={closeModalLogout}
                handleOk={onLogOut}
                title={"Xác nhận"}
            />
        </div >
    )
}

export default MainLayout