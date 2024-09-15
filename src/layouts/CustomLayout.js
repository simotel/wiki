// src/layouts/CustomLayout.js
import React from 'react';
import Layout from '@theme/Layout';
import CustomNavbar from '@site/src/components/CustomNavbar';

const CustomLayout = ({ children }) => {
  return (
    <Layout
      title="Your Site Title"
      description="Your Site Description"
    >
      <CustomNavbar />
      <main>{children}</main>
    </Layout>
  );
};

export default CustomLayout;
