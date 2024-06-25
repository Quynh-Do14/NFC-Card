import { Col, Layout, Menu, Row, } from 'antd';
import { useEffect, useState } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import "../../../assets/styles/components/MainLayout.css";
import { ROUTE_PATH } from '../../../core/common/appRouter';
import authService from '../../repositories/auth/service/auth.service';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DialogConfirmCommon from '../components/modal/dialogConfirm';
import Constants from '../../../core/common/constants';
import { ProfileState } from '../../../core/atoms/profile/profileState';
import { TeacherState } from '../../../core/atoms/teacher/teacherState';
import { DisciplineState } from '../../../core/atoms/discipline/disciplineState';
import { CategoryState } from '../../../core/atoms/category/categoryState';
import { isTokenStoraged } from '../../utils/storage';
import { CourseState } from '../../../core/atoms/course/courseState';
import { Header } from 'antd/es/layout/layout';

const { Content, Sider } = Layout;

const MainLayout = ({ ...props }: any) => {

    const [isOpenModalLogout, setIsOpenModalLogout] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

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
                                user: response,
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
            <Layout>
                <div className='flex justify- bg-[#FFFFFF] header'>
                    <Row>
                        {Constants.Menu.List.map((item: any, index: number) => {
                            return (
                                <Col
                                    span={8}
                                    key={index}
                                    className={`flex flex-col items-center gap-2 cursor-pointer text-[15px] whitespace-nowrap text-[#1e293bb3] font-semibold capitalize px-6 pt-5 pb-2 ${location.pathname.includes(item.link) && "active"}`}
                                // onClick={() => navigate(item.link)}
                                >
                                    <div dangerouslySetInnerHTML={{ __html: item.icon2 }} />
                                    {/* <item.icon style={{ fontSize: 22 }} /> */}
                                    <a href={item.link}>
                                        {item.label}
                                    </a>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <Layout>
                    <Sider className='sider' trigger={null}>
                        <Menu className='menu'                        >
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
                    </Sider>
                    <Content className='bg-[#f2f2f0] flex flex-col py-3'>
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
        </div>
    )
}

export default MainLayout