import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Link, NavLink, Outlet} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const items = [
    {
        key: '1',
        icon: React.createElement(UserOutlined),
        label: <Link to="/user">User</Link>,
    },
    {
        key: '2',
        icon: React.createElement(VideoCameraOutlined),
        label: <NavLink to="/videos">Videos</NavLink>,
    },
    {
        key: '3',
        icon: React.createElement(UploadOutlined),
        label: <NavLink to="/upload">Upload</NavLink>,
    },
    {
        key: '4',
        icon: React.createElement(UserOutlined),
        label: <NavLink to="/profile">Profile</NavLink>,
    },
];
export const DashboardLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div className="container-fluid vw-100 vh-100 m-0 p-0">
        <Layout style={{height:"100vh"}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 5,
                            minHeight: 550,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
        </div>
    );
};