import React, { useState } from 'react'
import { Button, Card, Divider, Dropdown, Input, Modal, Typography } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

import { asignment } from '../data'

const { Paragraph, Title } = Typography;

const AsignmentDetailPage = () => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [links, setLinks] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(links)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sentToTeacher = () => {
    console.log("sent ", links);
  }

  const items = [
    {
      key: '1',
      label: (
        <div onClick={showModal}>
          Links
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={showModal}>
          File
        </div>
      ),
    },
  ];

  return (
    <div style={style.container}>
      <>
        <Modal title="Links" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input style={style.input} onChange={(event) => setLinks(event.target.value)}></Input>
        </Modal>
      </>
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
            style={style.button_submit}
            onClick={sentToTeacher}
            >Submit</Button>
        </Card>
      </div>
    </div>
  )
}

const style = {
  input: {
    height: 50,
  },
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