import { Card } from 'antd'
import React from 'react'

function NewNote() {
    return (
        <div style={{
            marginBottom: 20
        }}>
            <Card
                bordered={true}
                hoverable={true}
                style={{
                    width: 500,
                }}>
                New note
            </Card>
        </div>
    )
}

export default NewNote