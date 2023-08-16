import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/FirebaseConfig"

function LoginScreen() {

    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            navigate("/h")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            style={style.container}
        >
            <Card
                style={{
                    width: 500
                }}
            >
                <Form
                    name="loginForm"
                    onFinish={login}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label=""
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Email' style={{ height: 50 }} bordered={true} onChange={(event) => setLoginEmail(event.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Password' style={{ height: 50 }} bordered={true} onChange={(event) => setLoginPassword(event.target.value)}/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={style.button}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

const style = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        height: 50,
        width: "100%"
    },
}

export default LoginScreen