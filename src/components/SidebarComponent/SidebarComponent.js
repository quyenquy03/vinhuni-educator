'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'antd';
import Sider from "antd/es/layout/Sider";
import {
    AppstoreOutlined,
    CalendarOutlined,
    MailOutlined,
    SettingOutlined,
    UploadOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import Link from "next/link";
import style from './SidebarComponent.module.scss'
import classNames from "classnames/bind";
import ROUTES from '@/constants/routes';
const cx = classNames.bind(style)

function SidebarComponent({collapsed}) {
    // const items = [
    //     {
    //         key: '1',
    //         icon: <UserOutlined />,
    //         label: (<Link href={'/admin'}> Dashboard </Link> ),
    //         link: '/admin'
    //     },
    //     {
    //         key: '2',
    //         icon: <VideoCameraOutlined />,
    //         label: (<Link  href={'/admin/manage-user'}> Quản lý người dùng </Link> ),
    //         link: '/admin/manage-user'
    //     },
    //     {
    //         key: '3',
    //         icon: <UploadOutlined />,
    //         label: (<Link href={'/admin/manage-post'}> Quản lý bài viết </Link> ),
    //         link: '/admin/manage-post'
    //     },
    //     {
    //         key: '4',
    //         icon: <UserOutlined />,
    //         label: 'nav 4',
    //     },
    //     {
    //         key: '5',
    //         icon: <VideoCameraOutlined />,
    //         label: 'nav 5',
    //     },
    //     {
    //         key: '6',
    //         icon: <UploadOutlined />,
    //         label: 'nav 6',
    //     },
    //     {
    //         key: '7',
    //         icon: <UserOutlined />,
    //         label: 'nav 7',
    //     },
    //     {
    //         key: '8',
    //         icon: <VideoCameraOutlined />,
    //         label: 'nav 8',
    //     },
    //     {
    //         key: '9',
    //         icon: <UploadOutlined />,
    //         label: 'nav 9',
    //     },
    //     {
    //         key: '11',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '12',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '13',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '14',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '15',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '16',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '17',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '18',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '19',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '20',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    //     {
    //         key: '21',
    //         icon: <UserOutlined />,
    //         label: 'nav 10',
    //     },
    // ];

    const getItem = (label, key, link, icon, children) => {
        return {
            key,
            icon,
            children,
            label,
            link
        };
    }

    const items = [
        getItem(<Link href={ROUTES.ADMIN_DASHBOARD}> Dashboard </Link>, '1', ROUTES.ADMIN_DASHBOARD, <MailOutlined />),
        getItem('Quản lý thông tin chung', '3', ROUTES.ADMIN_MANAGE_GENERAL, <AppstoreOutlined />, [
            getItem(<Link href={ROUTES.ADMIN_MANAGE_TRAINING_COURSE}> Khóa học và Ngành học </Link>, '3-1', ROUTES.ADMIN_MANAGE_TRAINING_COURSE),
            getItem(<Link href={ROUTES.ADMIN_MANAGE_TRAINING_PROGRAM}> Chương trình đào tạo</Link>, '3-2', ROUTES.ADMIN_MANAGE_TRAINING_PROGRAM),
            // getItem(<Link href={ROUTES.ADMIN_MANAGE_MAJOR}> Ngành học </Link>, '3-3', ROUTES.ADMIN_MANAGE_MAJOR),
            getItem(<Link href={ROUTES.ADMIN_MANAGE_PRIMARY_CLASS}> Lớp học hành chính </Link>, '3-4', ROUTES.ADMIN_MANAGE_PRIMARY_CLASS),
        ]),
        getItem(<Link href={'/admin/manage-user'}> Quản lý người dùng </Link>, '2', '/admin/manage-user', <UsergroupAddOutlined />),
        
    ]
    
    // const items = [
    //     getItem(<Link href={'/admin/dashboard'}> Dashboard </Link>, '1', '/admin/dashboard', <MailOutlined />),
    //     getItem(<Link href={'/admin/manage-user'}> Quản lý ngành học </Link>, '2', '/admin/manage-user', <CalendarOutlined />),
    //     getItem(<Link href={'/admin/manage-user'}> Quản lý khóa học </Link>, '4', '/admin/manage-user', <CalendarOutlined />),
    //     getItem(<Link href={'/admin/manage-user'}> Quản lý chương trình đào tạo </Link>, '3', '/admin/manage-user', <CalendarOutlined />),
    //     getItem('Quản lý thông tin chung', '3', '/admin/manage-post', <AppstoreOutlined />, [
    //         getItem(<Link href={'/admin/manage-post/list-post'}> Ngành học </Link>, '3-1', '/admin/manage-post/list-post'),
    //         getItem(<Link href={'/admin/manage-post/create-post'}> Khóa học </Link>, '3-2', '/admin/manage-post/create-post'),
    //         getItem(<Link href={'/admin/manage-post/update-post'}> Chương trình đào tạo</Link>, '3-3', '/admin/manage-post/update-post'),
    //     ]),
    //     getItem('Quản lý người dùng', '3', '/admin/manage-post', <AppstoreOutlined />, [
    //         getItem(<Link href={'/admin/manage-post/list-post'}> Sinh viên </Link>, '3-1', '/admin/manage-post/list-post'),
    //         getItem(<Link href={'/admin/manage-post/create-post'}> Giảng viên </Link>, '3-2', '/admin/manage-post/create-post'),
    //     ]),
    // ]
    const pathname = usePathname()
    const [openKey, setOpenKey] = useState(() => {
        const active = items.find(item => pathname.includes(item.link));
        if(active?.children) {
            return active?.key;
        }
        return null;
    })
    const [activeMenu, setActiveMenu] = useState(() => {
        const active = items.find(item => pathname.includes(item.link));
        if(active?.children) {
            const activeItem = active?.children.find(item => item.link == pathname);
            return activeItem?.key;
        }
        return active?.key;
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
                defaultOpenKeys={openKey}
                defaultSelectedKeys={activeMenu}
                theme="light"
                mode="inline"
                items={items}
                className={cx('menu-bar')}
            />
        </Sider>
    )
}
export default SidebarComponent