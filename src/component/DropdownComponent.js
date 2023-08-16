import React from 'react'
import { NavLink } from 'react-router-dom';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';

import { auth } from '../config/FirebaseConfig';

const DropdownComponent = () => {
    const items = [
        {
            key: '1',
            label: (
                <NavLink to={"/profile"}> <UserOutlined />{auth?.currentUser?.email}</NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink to={"/profile"}> <UserOutlined /> profile</NavLink>
            ),
        },
        {
            key: '3',
            label: (
                <NavLink to={"/s"}> <SettingOutlined /> Setting</NavLink>
            ),
        },
        {
            key: '4',
            label: (
                <NavLink to={"/login"}> <LogoutOutlined /> Log out</NavLink>
            ),
        },
    ];
    return (
        <div>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow
            >
                <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
        </div>
    )
}

export default DropdownComponent