import React from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: 'Access Demo',
      }}
    >
      <ProCard>
        <Access accessible={access.canSeeAdmin}>
          <Button>Demo</Button>
        </Access>
      </ProCard>
    </PageContainer>
  );
};

export default AccessPage;
