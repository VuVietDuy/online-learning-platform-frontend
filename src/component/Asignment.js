import React from 'react'
import { Card } from 'antd'
import { EllipsisOutlined, FolderOpenOutlined } from '@ant-design/icons';

function Asignment(props) {

  return (
    <div style={style.container}>
      <Card
        bordered={true}
        hoverable={true}
        style={style.card}
        actions={[
          <FolderOpenOutlined key="view" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}>
        {props.title}
      </Card>
    </div>
  )
}

const style = {
  container: {
    marginBottom: 20
  },
  card: {
    width: 500,
  },
}

export default Asignment