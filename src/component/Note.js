import React from 'react'
import { Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

function Note(props) {
  return (
    <div style={{
      marginBottom: 20
    }}>
      <Card
        bordered={true}
        hoverable={true}
        style={{
          width: 500,
        }}
        actions={[
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}>
        {props.title}
      </Card>
    </div>
  )
}

export default Note