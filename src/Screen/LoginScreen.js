import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input } from 'antd';


function LoginScreen() {

    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate("/h")
    };

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
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label=""
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder='Username' style={{ height: 50 }} bordered={true} />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Password' style={{ height: 50 }} bordered={true} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ height: 50, width: "100%" }}>
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
}

export default LoginScreen