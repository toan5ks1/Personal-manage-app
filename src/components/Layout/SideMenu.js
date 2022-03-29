import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider 
      width={150}
      collapsedWidth={0} 
      defaultCollapsed={collapsed}
      collapsible collapsed={collapsed} 
      onCollapse={onCollapse}  
      style={{position: 'fixed', minHeight: '100vh', zIndex: 100, marginLeft: '-0.8rem'}}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        style={{width: '100%'}}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/users">
          <TeamOutlined />
          <span>Users</span>
          <Link to="/users"></Link>
        </Menu.Item>

        <Menu.Item key="/counter">
          <DashboardOutlined />
          <span>Counter</span>
          <Link to="/counter"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;
