import React from 'react'
import { Button, Card, Divider, Dropdown, Typography } from 'antd'

import { asignment } from '../data'
import { UploadOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;

const AsignmentDetailPage = () => {

  const onClick = (e) => {
    console.log('e')
  }

  const items = [
    {
      key: '1',
      label: (
        <div onClick={onClick}>
          Links
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={onClick}>
          File
        </div>
      ),
    },
  ];

  console.log(asignment.desription)

  return (
    <div style={style.container}>
      <div>
        <Title level={2}>{asignment.title}</Title>
        <Divider />
        <Paragraph>
          {asignment.desription}
        </Paragraph>
        <Divider />
      </div>
      <div>
        <Card style={style.card} title={"Your excerise"}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow>
            <Button style={style.button} icon={<UploadOutlined />}>Add or create</Button>
          </Dropdown>
          <Button
            type='primary'
            style={style.button_submit}>Submit</Button>
        </Card>
      </div>
    </div>
  )
}

const style = {
  container: {
    maxWidth: 1000,
    display: 'flex',
  },
  card: {
    width: 300,
    marginLeft: 24,
  },
  button: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  button_submit: {
    width: "100%",
    height: 50,
  },
}

export default AsignmentDetailPage