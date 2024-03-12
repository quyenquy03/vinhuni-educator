'use client'
import { Content} from "antd/es/layout/layout";
import React, { useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from "@/components/HeaderComponent";
import SidebarComponent from "@/components/SidebarComponent";

function AdminLayout({children}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <HeaderComponent collapsed={collapsed} onCollapsed={setCollapsed} />
            <SidebarComponent collapsed={collapsed} />
            <Content
                style={{
                    margin: `70px 10px 0 0`,
                    padding: '10px',
                    minHeight: 1280,
                    // background: '#ccc',
                    borderRadius: '4px',
                    marginLeft: collapsed ? '90px' : '260px',
                    transition: '.15s linear'
                }}
            >
                {children}
            </Content>
        </Layout>
    )
}
export default AdminLayout;