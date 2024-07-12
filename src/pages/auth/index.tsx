import React, { useState } from 'react'
import LoginPage from './login'
import { Col, Row } from 'antd'
import "../../assets/styles/page/Login.css"
import RegisterPage from './register'
import { ButtonCommon } from '../../infrastructure/common/components/button/button-common'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../core/common/appRouter'
const AuthPage = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
    const navigate = useNavigate()
    const onOpenLoginPage = () => {
        setIsLoginPage(!isLoginPage)
    }

    const onLoginAsync = () => {
        navigate(ROUTE_PATH.HOME_PAGE)
    }
    console.log("isLoginPage", isLoginPage);

    return (
        <Row className='auth-page'>
            <Col sm={24} md={12} className='w-full page login'>
                <LoginPage
                    onOpenLoginPage={onOpenLoginPage}
                    onLogin={onLoginAsync}
                />
            </Col>
            <Col sm={24} md={12} className={`${isLoginPage ? "up" : "down"} w-full page register`}>
                <RegisterPage
                    onOpenLoginPage={onOpenLoginPage}
                />
            </Col>
            <Col sm={24} md={12} className={`${isLoginPage ? "login" : "register"} cover`}>
                <div className='cover-img w-full h-[100vh]'>
                    {/* <div className='switch'>
                        <span>Đăng kí</span>
                    </div> */}
                </div>
            </Col>
        </Row>
    )
}

export default AuthPage