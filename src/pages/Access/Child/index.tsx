import React from 'react';
import { PageContainer } from '@ant-design/pro-components';

const AccessPage: React.FC = () => {
  return (
    <PageContainer
      ghost
      header={{
        title: 'Child',
      }}
    >
      Child
    </PageContainer>
  );
};

export default AccessPage;
