import React from 'react';

import { Layout } from 'antd';

import SideMenu from './SideMenu';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#1a132f', paddingTop: 0}}>
      <SideMenu/>
      <Layout>
        <Content style={{}}>{children}</Content>
        <Footer/>
        <ToastContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
