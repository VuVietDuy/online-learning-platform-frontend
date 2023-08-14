import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbHierarchy = () => (
  <Breadcrumb
    style={{
      margin: '16px 0',
    }}
    items={[
      {
        title: 'Home',
      },
      {
        title: <Link href="/calender">Calander</Link>,
      },
    ]}
  />
);

export default BreadcrumbHierarchy;