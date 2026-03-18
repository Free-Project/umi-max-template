import React from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { Outlet } from '@umijs/max';

const Dashboard = () => {
  return (
    <PageContainer
      extra={[
        <Button key="3">Action3</Button>,
        <Button key="2">Action2</Button>,
        <Button key="1" type="primary">
          Action
        </Button>,
      ]}
      subTitle="Description of the current page"
      footer={[
        <Button key="3">Reset</Button>,
        <Button key="2" type="primary">
          Submit
        </Button>,
      ]}
    >
      <ProCard>
        <div style={{ padding: 40, maxWidth: 400 }}>Dashboard page</div>
        {/* <Outlet /> */}
      </ProCard>
    </PageContainer>
  );
};

export default Dashboard;
