'use client'
import { Content} from "antd/es/layout/layout";
import React, { useState } from 'react';
import { Layout } from 'antd';
import SidebarComponent from "@/components/SidebarComponent";

function AdminLayout({children}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{backgroundColor: '#f6f9ff'}}>
            <SidebarComponent collapsed={collapsed} />
            <Content
                style={{
                    margin: `10px 10px 0 0`,
                    padding: '10px',
                    minHeight: '100vh',
                    // background: '#f6f9ff',
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