'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'antd';
import Sider from "antd/es/layout/Sider";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import Link from "next/link";
import style from './SidebarComponent.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(style)

function SidebarComponent({collapsed}) {
    const items = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: (<Link href={'/admin'}> Dashboard </Link> ),
            link: '/admin'
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: (<Link  href={'/admin/manage-user'}> Quản lý người dùng </Link> ),
            link: '/admin/manage-user'
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: (<Link href={'/admin/manage-post'}> Quản lý bài viết </Link> ),
            link: '/admin/manage-post'
        },
        {
            key: '4',
            icon: <UserOutlined />,
            label: 'nav 4',
        },
        {
            key: '5',
            icon: <VideoCameraOutlined />,
            label: 'nav 5',
        },
        {
            key: '6',
            icon: <UploadOutlined />,
            label: 'nav 6',
        },
        {
            key: '7',
            icon: <UserOutlined />,
            label: 'nav 7',
        },
        {
            key: '8',
            icon: <VideoCameraOutlined />,
            label: 'nav 8',
        },
        {
            key: '9',
            icon: <UploadOutlined />,
            label: 'nav 9',
        },
        {
            key: '11',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '12',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '13',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '14',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '15',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '16',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '17',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '18',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '19',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '20',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
        {
            key: '21',
            icon: <UserOutlined />,
            label: 'nav 10',
        },
    ];

    const pathname = usePathname()
    const [activeMenu, setActiveMenu] = useState(() => {
        const active = items.find(item => item.link == pathname);
        return active.key;
    })
    return (
        <Sider 
            width={collapsed ? 60 : 250}
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            className={cx('sidebar')}
        >
            <Menu
                activeKey="2"
                theme="light"
                mode="inline"
                defaultSelectedKeys={activeMenu}
                items={items}
                className={cx('menu-bar')}
            />
        </Sider>
    )
}
export default SidebarComponent