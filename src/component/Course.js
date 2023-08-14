import React from 'react';
import { EditOutlined, EllipsisOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Course = (props) => {
  return (<div>
        <Card
          style={{
          }}
          cover={
            <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          >
          <Meta
            avatar={<Avatar icon={<UsergroupAddOutlined />} />}
            title={props.title}
            />
        </Card>
      </div>)
}
export default Course;