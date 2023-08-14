import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { Layout, Menu } from 'antd'

import NotePage from './NotePage';
import AsignmentPage from './AsignmentPage';
import EditorPage from './EditorPage';
import AsignmentDetailPage from './AsignmentDetailPage';
import Document from '../component/Document';

const { Header } = Layout;

function CourseDetailPage() {

    //get id from url
    const { id } = useParams("id")
    console.log("pa", id)

    return (
        <div>
            <Header style={style.header} >
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultOpenKeys={['note']}
                    defaultSelectedKeys={['note']}>
                    <Menu.Item key="note"><NavLink to={`/${id}`}>Note</NavLink></Menu.Item>
                    <Menu.Item key="asignment"><NavLink to={`/${id}/asignment`}>Asignment</NavLink></Menu.Item>
                    <Menu.Item key="document"><NavLink to={`/${id}/document`}>Document</NavLink></Menu.Item>
                </Menu>
            </Header>
            <div style={style.content}>
                <Routes>
                    <Route path={`/`} element={<NotePage></NotePage>}></Route>
                    <Route path={`/editor`} element={<EditorPage></EditorPage>}></Route>
                    <Route path={`/asignment`} element={<AsignmentPage></AsignmentPage>}></Route>
                    <Route path={`/document`} element={<Document></Document>}></Route>
                    <Route path={`/asignment/:asignmentId/detail`} element={<AsignmentDetailPage></AsignmentDetailPage>}></Route>
                </Routes>
            </div>
        </div>
    )
}

const style = {
    header: {
        padding: 0,
        borderBottom: "1px solid #e0e0e0"
    },
    content: {
        display: "flex",
        justifyContent: "center",
        marginTop: 24,
    }
}

export default CourseDetailPage