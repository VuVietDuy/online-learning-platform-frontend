import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col, theme } from 'antd';

import Course from '../component/Course'
import { courses } from '../data';

const { Content } = Layout;

const HomePage = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div style={{
      padding: "24"
    }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >

        <Row gutter={[24, 16]}>
          {
            courses.map(course => {
              return <Col span={5} key={course.id}>
                <NavLink to={`/${course.id}`}>
                  <Course title={course.name} ></Course>
                </NavLink>
              </Col>
            })
          }

        </Row>
      </Content>
    </div>
  );
};

export default HomePage;
