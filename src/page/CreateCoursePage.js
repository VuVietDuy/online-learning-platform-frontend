import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';

import {createCourse} from '../service/CourseService'

const CreateCoursePage = () => {

    const [newCourseName, setNewCourseName] = useState("")
    const [newCourseDescription, setNewCourseDescription] = useState("")

    const handleCreateCourse = async () => {
        await createCourse(newCourseName, newCourseDescription);
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
                    onFinish={handleCreateCourse}
                >
                    <Form.Item
                        label=""
                        name="name"
                    >
                        <Input placeholder='Name' style={{ height: 50 }} bordered={true} onChange={(event) => setNewCourseName(event.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="description"
                    >
                        <Input placeholder='Description' style={{ height: 50 }} bordered={true} onChange={(event) => setNewCourseDescription(event.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={style.button}>
                            Create course
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

const style = {
    container: {
        marginTop: 100,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
    },
    button: {
        height: 50,
        width: "100%"
    },
}

export default CreateCoursePage;