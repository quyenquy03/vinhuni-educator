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
            getItem(<Link href={ROUTES.ADMIN_MANAGE_TRAINING_COURSE}> Khóa đào tạo </Link>, '3-1', ROUTES.ADMIN_MANAGE_TRAINING_COURSE),
            getItem(<Link href={ROUTES.ADMIN_MANAGE_MAJOR}> Ngành đào tạo </Link>, '3-3', ROUTES.ADMIN_MANAGE_MAJOR),
            getItem(<Link href={ROUTES.ADMIN_MANAGE_TRAINING_PROGRAM}> Chương trình đào tạo</Link>, '3-2', ROUTES.ADMIN_MANAGE_TRAINING_PROGRAM),
            getItem(<Link href={ROUTES.ADMIN_MANAGE_PRIMARY_CLASS}> Lớp học hành chính </Link>, '3-4', ROUTES.ADMIN_MANAGE_PRIMARY_CLASS),
        ]),
        getItem(<Link href={'/admin/manage-user'}> Quản lý người dùng </Link>, '2', '/admin/manage-user', <UsergroupAddOutlined />),
        
    ]
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