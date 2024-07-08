import React, { useState } from 'react'
import LoginPage from './login'
import { Col, Row } from 'antd'
import "../../assets/styles/page/Login.css"
import RegisterPage from './register'
import { ButtonCommon } from '../../infrastructure/common/components/button/button-common'
const AuthPage = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(false);

    const onOpenLoginPage = () => {
        setIsLoginPage((!isLoginPage))
    }
    return (
        <Row className='auth-page'>
            <Col span={12}>
                <div>
                    <LoginPage
                        onOpenLoginPage={onOpenLoginPage}
                    />
                </div>
            </Col>
            <Col span={12}>
                <RegisterPage
                    onOpenLoginPage={onOpenLoginPage}
                />
            </Col>
            <Col span={12} className={`${isLoginPage ? "login" : "register"} cover`}>
                <div className='bg-red-100 w-full h-[100vh] flex justify-center items-center'>
                    <ButtonCommon
                        classColor={'green'}
                        onClick={onOpenLoginPage}
                        title={'Đăng nhập'}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default AuthPage