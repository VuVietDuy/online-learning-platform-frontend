import React, { useEffect, useState } from 'react';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import { CalendarOutlined, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ReadOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

import HomePage from '../page/HomePage';
import CourseDetailPage from '../page/CourseDetailPage';
import CalendarPage from '../page/CalendarPage';
import SettingPage from '../page/SettingPage';
import ProfilePage from '../page/ProfilePage';
import CreateCoursePage from '../page/CreateCoursePage';
import BreadcrumbHierarchy from '../component/BreadcrumbHierarchy';
import DropdownComponent from '../component/DropdownComponent';
import { getCourses } from '../service/CourseService';

const { Header, Content, Sider } = Layout;

function MainScreen() {

  const [collapsed, setCollapsed] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesData = await getCourses();
      setCourses(coursesData);
    };

    fetchCourses();
  }, [])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout>

        {/* HEADER */}
        <Header
          theme='light'
          style={style.header}
        >
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
            }}
          >{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>

          <DropdownComponent></DropdownComponent>
        </Header>

        <Layout
          style={{
            minHeight: '100vh',
          }}
        >

          {/* SIDE BAR */}
          <Sider
            trigger={null} collapsible collapsed={collapsed}
            width={200}
            theme='light'
            style={style.sider}
          >
            <Menu
              mode="inline"
              theme='light'
            >
              <Menu.Item icon={<HomeOutlined />} key={"home"}><Link to="/h">Home</Link></Menu.Item>
              <Menu.Item icon={<CalendarOutlined />} key={"calendar"}><Link to="/calander">Calander</Link></Menu.Item>
              <SubMenu key="teaching" icon={<UsergroupAddOutlined />} title="Teaching">
                {courses.map(course => {
                  return <Menu.Item key={`teaching_${course.id}`}><NavLink to={`/${course.id}`}>{course.name}</NavLink></Menu.Item>
                })}
              </SubMenu>
              <SubMenu key="course" icon={<ReadOutlined />} title="Course">
                {courses.map(course => {
                  return <Menu.Item key={`course_${course.id}`}><NavLink to={`/${course.id}`}>{course.name}</NavLink></Menu.Item>
                })}
              </SubMenu>
            </Menu>

          </Sider>

          {/* CONTENT */}
          <Layout
            theme="light"
            style={style.layout}
          >
            <BreadcrumbHierarchy></BreadcrumbHierarchy>

            <Content
              style={style.content}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/h" element={<HomePage />} />
                <Route path="/calander" element={<CalendarPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/s" element={<SettingPage />} />
                <Route path="/:id/*" element={<CourseDetailPage />} />
                <Route path="/createCourse" element={<CreateCoursePage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

const style = {
  header: {
    background: "#ffffff",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: "1px solid #e0e0e0",
    padding: '0 16px',
  },
  sider: {
    // background: "#ffffff",
    height: '100vh',
  },
  layout: {
    padding: '0 24px 24px',
  },
  content: {
    margin: 0,
    minHeight: 280,
    background: "#ffffff",
  },
}

export default MainScreen